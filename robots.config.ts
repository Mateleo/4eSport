export default [
    { UserAgent: '*' },
    { Allow: '/' },
    { BlankLine: true },
    { Comment: '4eSport' },

    { Sitemap: (req: any) => `https://4esport.fr/sitemap.xml` }
]