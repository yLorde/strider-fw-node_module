# Strider FW Node Module

Uma biblioteca Node.js moderna para facilitar requisições HTTP, autenticação e criação de APIs de forma simples, organizada e reutilizável.

> Repositório oficial: https://github.com/yLorde/strider-fw-node_module

---

## ✨ Recursos

- 📦 Estrutura modular
- 🌐 Sistema de requests simplificado
- 🔐 Suporte a autenticação via token
- 🧩 Fácil integração com outros projetos
- ⚡ Compatível com ESModules (`import/export`)
- 🛠 Tipagem via `index.d.ts`

## 📥 Instalação

```bash
npm install https://github.com/yLorde/strider-fw-node_module
```

## 🚀 Uso Básico

```js
import { StriderFramework } from "strider-framework";

const strider = new StriderFramework({ baseURL: "https://api.site.com" })
export const { api } = strider.api;

export const authApi = {
  login: (email: string, password: string) => api.post('/auth/login', { email, password }, noAuth),
  register: (data: Record<string, unknown>) => api.post('/auth/register', data, noAuth),
  me: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout'),
};
```

## 📄 Licença

MIT

## 👑 Autor

Desenvolvido por **yLorde**
