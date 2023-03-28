addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { searchParams } = new URL(request.url)
  const cid = searchParams.get('cid')

  if (!cid) {
    return new Response('Missing CID parameter', { status: 400 })
  }

  // Query Web3.Storage for the CID data
  const res = await fetch(`https://dweb.link/ipfs/${cid}`)
  const data = await res.text()

  // Create a new response with the CID data
  return new Response(data, {
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    }
  })
}


