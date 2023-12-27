import type { Conversation } from '@/types/conversation'

const testMarkdown: Conversation = {
  id: 'test_markdown',
  providerId: 'provider-google',
  conversationType: 'continuous',
  name: 'Test Markdown',
  icon: '',
}

export const conversationMapData = {
  test_markdown: testMarkdown,
}
