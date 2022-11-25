
import express, { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import next from 'next';
import qs from 'querystring';
const app = next({
  dev: true
})
const handle = app.getRequestHandler()
app.prepare()
    .then(() => {
        const server = express()
        server.use(
          `/api`,
          express.urlencoded({ extended: true }),
          express.json(),
          createProxyMiddleware(`/api`, {
            target: 'https://service.aspecta.ai',
            onProxyReq: (proxyReq, req: Request, res: Response) => {
              proxyReq.setHeader('appid', 'bc17818b-d70e-4883-8148-74a2bea56674');
              if (!req.body || !Object.keys(req.body).length) {
                return;
              }
        
              const contentType = proxyReq.getHeader('Content-Type');
              const writeBody = (bodyData: string) => {
                proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
                proxyReq.write(bodyData);
              };
              if (contentType === 'application/json') {
                writeBody(JSON.stringify(req.body));
              }
              if (contentType === 'application/x-www-form-urlencoded') {
                writeBody(qs.stringify(req.body));
              }
            },
            pathRewrite: { [`^/api`]: '/' },
            changeOrigin: true
          })
        );
        server.all('*', (req, res) => {
            handle(req, res)
        })

        server.listen('3000')
    })
