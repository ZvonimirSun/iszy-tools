import type { MaybeRefOrGetter } from 'vue'
import { useClipboard } from '@vueuse/core'
import ElMessage from 'element-plus/es/components/message/index'

export function useCopy ({
  source, text = '已复制到剪贴板', createToast = true
}: { source?: MaybeRefOrGetter<string>; text?: string; createToast?: boolean } = {}) {
  const { copy, ...rest } = useClipboard({
    source,
    legacy: true
  })

  return {
    ...rest,
    async copy (content?: string, { notificationMessage }: { notificationMessage?: string } = {}) {
      if (source) {
        await copy()
      } else {
        await copy(content)
      }

      if (createToast) {
        ElMessage.success(notificationMessage ?? text)
      }
    }
  }
}
