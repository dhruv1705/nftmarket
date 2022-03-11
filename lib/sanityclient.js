import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'q8vymc54',
    dataset : 'production',
    apiVersion: '2021-03-25',
    token : 'skvHvfIleaRBDKkBpR5PBlwMZxWNnFT6K6qm3RLVVEcquqBoQpDy54A1MHMTryDWj0xyKPUfT3cqE2UdpfGN0ipCyFdKkAGReWDeTQA1sKOVTuUVkGeMWwj1m8RjiJrydkcvshWl6NGwPvKDCKyGFapUKNHa4LSPMcF5XVBOyaJPPRJPzWjo',
    useCdn: false, 
})