// App external

import 'clientjs'

// App internal

const ROOT_PUBLIC = '/public'

//response constante
const RESPONSE_STATUS_200 = 200
const RESPONSE_STATUS_300 = 300
const RESPONSE_STATUS_401 = 401
const DATA_CODE_401_2 = '401.2'

const call = async (
  method: 'GET' | 'POST',
  urlWs: string,
  body?: any,
  params?: { download?: boolean; files?: Array<File> }
) => {
  const headers = new Headers({})

  const mode: RequestMode = 'cors'
  const credentials: RequestCredentials = 'include'

  const config: RequestInit = {
    method,
    headers,
    mode,
    credentials,
  }

  const token = localStorage.getItem('xsrf-token')
  if (token) headers.set('xsrf-token', token)

  const configBody = JSON.stringify(body)
  if (body) config.body = configBody

  // useful for GA : const attachmentsSize = params && params.files ? params.files.length : 0
  // Upload file management
  if (params && params.files) {
    const formData = new FormData()
    formData.append(
      'model',
      new Blob([configBody], {
        type: 'application/json',
      })
    )

    params.files.forEach((file: File) => {
      formData.append(
        'files',
        file,
        encodeURIComponent(file.name).replace(/\'/g, '%27')
      )
    })
    // Delete default Content-Type in order to force multipart/form-data content type
    headers.delete('Content-Type')
    config.body = formData
  } else headers.set('Content-Type', 'application/json')

  try {
    const url = ''
    const response = await fetch(url, config)
    const type = response.headers.get('content-type') || ''
    let result
    if (type.indexOf('application/json') > -1) result = response.json()
    else if (type.indexOf('application/pdf') > -1) result = response.blob()
    else if (type.indexOf('text/plain') > -1) result = response.text()
    else if (!type) result = { success: true }

    const data = await result

    if (
      response.status >= RESPONSE_STATUS_200 &&
      response.status < RESPONSE_STATUS_300
    ) {
      if (params && params.download) {
        let name
        try {
          const contentDisp = response.headers.get('Content-Disposition')
          if (contentDisp)
            name = decodeURIComponent(contentDisp.split(';')[1].split('=')[1])
        } catch (e) {
          name = 'Document Cbp.pdf'
        }
        /*
        if (!client.isMobileIOS()) {
          const reader = new FileReader()
          reader.readAsDataURL(data)
          reader.onloadend = () => {
            if (reader.result) {
              const urlFile = (reader.result as string).replace(
                'data:;base64,',
                'data:application/pdf;base64,'
              )
              console.log(urlFile)
              
              //const element = document.createElement('a')
              //element.href = urlFile
              //element.click()
              

              const win = window.open()
              console.log(win)
              if (win)
                win.document.write(
                  '<iframe src="' +
                    urlFile +
                    '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
                )
              else console.log(' no win')
            }
          }
        } else 
        */
        //FPE saveAs(data, name)
      }

      return data
    } else {
      if (
        response.status === RESPONSE_STATUS_401 &&
        data.code === DATA_CODE_401_2
      )
        // User is disconnect, use loadUserTokenDone in order to empty the store and redirect on homepage
        //FPE  store.dispatch(chargerUserTokenDone(null) as any)

        throw data
    }
  } catch (error) {
    let errorThrow
    // If messageFront property exists in error, it's an error from the back
    if ('messageFront' in error) errorThrow = error
    else errorThrow = { messageFront: 'Hors ligne' }

    //FPE   store.dispatch(ouvrirNotificationAction(errorThrow.messageFront))
    throw errorThrow
  }
}

const getCall = (
  url: string,
  params?: { download?: boolean; files?: Array<File> }
) => {
  return call('GET', url, null, params)
}

const postCall = (
  url: string,
  body?: any,
  params?: { download?: boolean; files?: Array<File> }
) => {
  return call('POST', url, body, params)
}

export const ConfigWS = {
  config: () => {
    return fetch(`/configuration.json?t=${new Date().getTime()}`).then(
      response => response.json()
    )
  },
}

export const LoginWS = {
  login: (username: string, password: string) => {
    return postCall(`${'ROOT_OPEN'}/login`, {
      username,
      password,
    })
  },
  logout: () => {
    return postCall(`${'ROOT_SECURE'}${'ROOT_USERS'}${'ROOT_ME'}/logout`)
  },
}

export const UserWS = {
  getCurrentUser: () => {
    return getCall(`${'ROOT_SECURE'}${'ROOT_USERS'}${'ROOT_ME'}`)
  },
  setAccountCommunicationData: (id: number, data: any) => {
    return postCall(`${'ROOT_SECURE'}${'ROOT_USERS'}/${id}/communication`, data)
  },
}
