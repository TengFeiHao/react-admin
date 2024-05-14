interface EnvType {
  PROJECT_NAME: string
  BASE_URL: string
}

const ENV: EnvType = {
  PROJECT_NAME: '',
  BASE_URL: ''
}

if (import.meta.env.VITE_APP_ENV === 'development') {
  ENV.BASE_URL = ''
}

export { ENV }
