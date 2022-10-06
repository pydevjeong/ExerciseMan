const proxy=require('http-proxy-middleware')

module.exports=function(app){
  app.use(
    proxy.createProxyMiddleware('/api',{
      target:'https://13.125.127.72:8080',
      changeOrigin: true
    })
  )
}
