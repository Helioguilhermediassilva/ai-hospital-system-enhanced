# 🚀 Guia de Deploy no Vercel

Este guia te ajudará a fazer o deploy do projeto AI Hospital System no Vercel de forma rápida e eficiente.

## 📋 Pré-requisitos

- Conta no [Vercel](https://vercel.com)
- Conta no [GitHub](https://github.com) (já configurada)
- Repositório: `https://github.com/Helioguilhermediassilva/ai-hospital-system`

## 🎯 Opções de Deploy

### Opção 1: Deploy Automático via GitHub (Recomendado)

1. **Acesse o Vercel**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub

2. **Importe o Projeto**
   - Clique em "New Project"
   - Selecione "Import Git Repository"
   - Escolha o repositório `ai-hospital-system`

3. **Configuração Automática**
   - O Vercel detectará automaticamente que é um projeto Vite/React
   - As configurações já estão otimizadas no `vercel.json`
   - Clique em "Deploy"

4. **Deploy Concluído**
   - O deploy será feito automaticamente
   - Você receberá uma URL pública (ex: `ai-hospital-system.vercel.app`)

### Opção 2: Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy do projeto
vercel

# Para deploy em produção
vercel --prod
```

### Opção 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Helioguilhermediassilva/ai-hospital-system)

## ⚙️ Configurações do Projeto

### Configuração Automática
O projeto já está configurado com:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Variáveis de Ambiente
Não são necessárias variáveis de ambiente para este projeto.

### Domínio Personalizado (Opcional)
1. No dashboard do Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções

## 🔄 Deploy Automático

### Configuração de Auto-Deploy
- Cada push na branch `main` fará deploy automático
- Pull requests criam preview deployments
- Rollback automático em caso de erro

### Branches e Ambientes
- `main` → Produção
- Outras branches → Preview deployments

## 📊 Monitoramento

### Analytics
- Acesse "Analytics" no dashboard Vercel
- Monitore performance e visitantes
- Analise Core Web Vitals

### Logs
- Veja logs de build e runtime
- Debug de problemas em tempo real

## 🛠️ Troubleshooting

### Problemas Comuns

**Build Error:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Assets não carregam:**
- Verifique se os caminhos estão corretos
- Assets devem estar na pasta `public/` ou `src/assets/`

**Vídeo não reproduz:**
- Verifique se o arquivo está no formato correto (MP4)
- Confirme se o tamanho não excede limites do Vercel

### Limites do Vercel (Plano Gratuito)
- **Bandwidth**: 100GB/mês
- **Build Time**: 6 horas/mês
- **File Size**: 25MB por arquivo
- **Total Size**: 100MB por deployment

## 🎯 Otimizações Pós-Deploy

### Performance
- Monitore Core Web Vitals
- Otimize imagens se necessário
- Use Vercel Analytics

### SEO
- Configure meta tags personalizadas
- Adicione sitemap.xml se necessário
- Configure redirects se aplicável

### Segurança
- Configure headers de segurança
- Use HTTPS (automático no Vercel)
- Configure CSP se necessário

## 📈 Próximos Passos

1. **Deploy Inicial**: Siga a Opção 1 para deploy rápido
2. **Teste Completo**: Verifique todas as funcionalidades
3. **Domínio Personalizado**: Configure se desejado
4. **Monitoramento**: Configure analytics e alertas
5. **Otimização**: Monitore performance e otimize

## 🆘 Suporte

- **Documentação Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Comunidade**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Status**: [vercel-status.com](https://vercel-status.com)

---

**🎉 Seu site estará online em menos de 5 minutos!**

