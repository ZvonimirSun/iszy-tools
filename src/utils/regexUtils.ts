// eslint-disable-next-line no-control-regex,regexp/no-dupe-characters-character-class
export const REGEX_EMAIL = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\v\f\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|\\[\x01-\x09\v\f\x0E-\x7F])\*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d{1,2}|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\v\f\x0E-\x1F\x21-\x5A\x53-\x7F]|\\[\x01-\x09\v\f\x0E-\x7F])+)\])$/
export const REGEX_MOBILE_PHONE = /^1[3-9]\d{9}$/
