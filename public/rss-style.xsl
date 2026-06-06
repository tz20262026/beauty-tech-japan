<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/"
  exclude-result-prefixes="atom media">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="ja">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><xsl:value-of select="/rss/channel/title"/> — RSSフィード</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Yu Gothic', sans-serif; background: #f8f8f8; color: #333; }
          .hero { background: linear-gradient(135deg, #ec4899, #f43f5e, #a855f7); padding: 40px 24px; text-align: center; color: white; }
          .hero h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
          .hero p { opacity: 0.85; font-size: 0.9rem; margin-bottom: 16px; }
          .badge { display: inline-block; background: rgba(255,255,255,0.25); border-radius: 999px; padding: 4px 14px; font-size: 0.75rem; font-weight: 600; margin-bottom: 12px; }
          .container { max-width: 720px; margin: 0 auto; padding: 24px 16px; }
          .info-box { background: white; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px; border: 1px solid #e5e7eb; font-size: 0.85rem; color: #6b7280; line-height: 1.6; }
          .info-box strong { color: #374151; }
          .item { background: white; border-radius: 12px; border: 1px solid #e5e7eb; margin-bottom: 16px; overflow: hidden; }
          .item a { text-decoration: none; display: flex; gap: 0; flex-direction: column; }
          .item-body { padding: 16px 20px; }
          .item-date { font-size: 0.75rem; color: #9ca3af; margin-bottom: 6px; }
          .item-title { font-size: 1rem; font-weight: 700; color: #111827; line-height: 1.5; margin-bottom: 8px; }
          .item-title:hover { color: #ec4899; }
          .item-desc { font-size: 0.85rem; color: #6b7280; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
          .footer { text-align: center; padding: 32px 16px; font-size: 0.8rem; color: #9ca3af; }
          @media(min-width:600px){ .item a { flex-direction: row; } }
        </style>
      </head>
      <body>
        <div class="hero">
          <div class="badge">RSS フィード</div>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p><xsl:value-of select="/rss/channel/description"/></p>
          <p style="font-size:0.8rem;opacity:0.7;">このURLをRSSリーダー（Feedly等）に登録すると最新記事を自動受信できます</p>
        </div>
        <div class="container">
          <div class="info-box">
            <strong>📡 RSSフィードURL：</strong>
            <xsl:value-of select="/rss/channel/atom:link/@href"/>
            <br/>
            更新頻度：<strong>3日おき</strong> ／ 最終更新：<xsl:value-of select="/rss/channel/lastBuildDate"/>
          </div>
          <xsl:for-each select="/rss/channel/item">
            <div class="item">
              <a>
                <xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
                <xsl:attribute name="target">_blank</xsl:attribute>
                <div class="item-body">
                  <div class="item-date"><xsl:value-of select="pubDate"/></div>
                  <div class="item-title"><xsl:value-of select="title"/></div>
                  <div class="item-desc"><xsl:value-of select="description"/></div>
                </div>
              </a>
            </div>
          </xsl:for-each>
        </div>
        <div class="footer">© Beauty Tech Japan — Powered by RSS</div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
