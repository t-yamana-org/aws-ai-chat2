import { FaArrowUp } from "react-icons/fa";

export default function NewChat() {
  const models = [
    {
      id: "global.anthropic.claude-haiku-4-5-20251001-v1:0",
      name: "Claude Haiku 4.5 v1",
    },
    {
      id: "global.anthropic.claude-sonnet-4-5-20250929-v1:0",
      name: "Claude Sonnet 4.5 v1",
    },
  ];

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
              <div className="flex items-center justify-center rounded-md text-sm">
                <select name="model" className="w-full rounded-md p-2">
                  {models.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>
              <button className="flex items-center justify-center rounded-md bg-emerald-600 p-2 text-white  hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600">
                送信
                <FaArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
