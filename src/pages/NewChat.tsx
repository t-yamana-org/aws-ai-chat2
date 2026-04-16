export default function NewChat() {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-bold">test-user さん</h1>
        <form>
          <div className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-200 p-4">
            <textarea
              name="message"
              className="field-sizing-content max-h-80 w-full resize-none overflow-y-auto border-none wrap-break-words outline-none"
              placeholder="質問を入力してください"
            />
            <div className="flex justify-end gap-2">
              <button className="flex items-center justify-center rounded-md bg-emerald-600 p-2 text-white  hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600">
                送信
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
