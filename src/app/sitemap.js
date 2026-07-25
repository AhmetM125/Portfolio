export default function sitemap() {
  const baseUrl = "https://yurdalsoftware.com";
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
