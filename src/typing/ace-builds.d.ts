export {}
declare module 'ace-builds' {
  namespace Ace {
    interface EditSession {
      foldAll: () => void,
      unfold: () => void
    }
  }
}
