# cache.global bug (I think)

I would expect `cache.global.purgeTags` to purge regional tags. And maybe they do in prod but it looks like this fails in local development.

## Repro

1. `npm i`
1. `npx fly test`
