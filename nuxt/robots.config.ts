export default [
    { UserAgent: '*' },
    { BlankLine: true },
    { Comment: '4eSport' },

    { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
]