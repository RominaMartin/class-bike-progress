import EN from "./EN.json";

export const translations: { [key: string]: string | object } = { en: EN };

export const getMessages = (locale = "en") =>
  flattenMessages(translations[locale]);

export function flattenMessages(nestedMessages: any, prefix = "") {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      (messages as any)[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}
