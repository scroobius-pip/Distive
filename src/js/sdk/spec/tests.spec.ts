import * as fc from 'fast-check'
import { ok } from 'neverthrow'
import SDK, { GetThreadInput, SDKConfig, UpsertPostInput } from '..'

const DEMO_DATA: UpsertPostInput[] = []

const client = SDK({ serverId: 'rrkah-fqaaa-aaaaa-aaaaq-cai', host: 'http://127.0.0.1:8000' })
    ._unsafeUnwrap()

test('createThread', async () => {
    const result = await client.upsertPost({
        channelId: "channel_1",
        content: "content_1",
        postId: "comment_1"
    })

    expect(result.isOk()).toBe(true)
    expect(result._unsafeUnwrap()).toBe("comment_1")
})

test('toggleMetadata', async () => {
    const result = await client.toggleMetadata({
        channelId: "channel_1",
        label: "label_1",
        postId: "comment_1"
    })
    // Anonymous SDK doesn't support toggle_metadata
    expect(result.isOk()).toBeTruthy()
    expect(result._unsafeUnwrap()).toBeFalsy()
})
