export function validURL(str: string) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

export function ensureArray(arr: any) {
  if (Array.isArray(arr)) return arr;

  return [];
}

export function makeInitials(first_name: string | undefined, last_name: string | undefined, fallback: string) {
  if (first_name && last_name)
    return (`${first_name[0]}${last_name[0]}`).toUpperCase();

  return fallback[0].toUpperCase();
}

export function makeFullName(first_name: string | undefined, last_name: string | undefined, fallback: string) {
  if (first_name && last_name)
    return (`${first_name} ${last_name}`);

  return fallback;
}