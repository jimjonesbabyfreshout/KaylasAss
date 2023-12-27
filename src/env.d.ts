/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GEMINI_API_KEY:AIzaSyC2G421VCZmAQSao1V2lRIzn1-kx_gFd5w
  readonly HTTPS_PROXY: string
//  readonly GEMINI_API_BASE_URL: string
  readonly HEAD_SCRIPTS: string
  readonly SECRET_KEY: string
  readonly SITE_PASSWORD: string
//  readonly OPENAI_API_MODEL: string

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
