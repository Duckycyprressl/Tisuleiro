# Tisuleiro

Bot Discord escrito em JavaScript com Node.js e discord.js.

## Instalação

```bash
npm install
npm start
```

## Variável de ambiente

O token do Discord **não fica no código nem no GitHub**.

Configure a variável de ambiente:

```text
DISCORD_TOKEN=seu_token_do_discord
```

Na hospedagem, adicione `DISCORD_TOKEN` nas variáveis de ambiente e coloque o token como valor.

## Comando de teste

`!oi` → `Oi!`

## Estrutura

- `index.js` — código principal do bot
- `package.json` — dependências e inicialização
- `.gitignore` — impede arquivos secretos e dependências locais de irem para o GitHub
- `.env.example` — exemplo da variável necessária, sem token real
