let counter = 0

addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello world! " + counter, {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    }),
  );
});

setInterval(() => {
  counter++
}, 5000)
