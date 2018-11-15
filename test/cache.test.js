import chai from 'chai'
import cache from '@fly/cache'

const { expect } = chai

describe('cache', () => {
  it.only("cache with regional purge", async () => {
    await cache.set('k', 'anything', { tags: ['tag1', 'tag2'] })

    expect(await cache.getString('k')).to.equal('anything')

    await cache.purgeTag('tag1')

    expect(await cache.getString('k')).to.equal(null)
  })

  it.only("cache with global purge", async () => {
    await cache.set('k', 'anything', { tags: ['tag1', 'tag2'] })

    expect(await cache.getString('k')).to.equal('anything')

    // Global here instead of regional. I would expect this to also purge regional, yes?
    await cache.global.purgeTag('tag1')

    expect(await cache.getString('k')).to.equal(null)
  })
})
