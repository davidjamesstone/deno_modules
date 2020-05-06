serve:
	.bin/serve.ts

format:
	deno fmt app/app.ts app/components .bin

bundle:
	deno bundle --unstable --importmap=app/import_map.json app/app.ts app/trinity.bundle.js

build: format bundle

watch:
	.bin/watch.ts