export const initialJson = {
  type: "group",
  name: "Example Case File",
  description: "It all starts with a group. You can add various items of differing types in the \"items\" array. (Note: The outermost element has to be a group. This is the only aspect of the format that is subject to change.)",
  items: [
    { type: "level", id: "disco-ni-HHarAN5mJWy" },
    {
      type: "group",
      name: "Cool Levels",
      description: "You can nest groups, by the way. ",
      items: [
        { type: "level", id: "toxy-5ABtN28ouNr" },
        { type: "level", id: "addictio-N5fqCFLMaSG" },
        { type: "level", id: "color-ff-RhGF2Hy2Jic" }
      ]
    },
    { type: "note", name: "It's a note!", description: "You can add notes as well." },
    { type: "level", id: "espresso-8vyjFwpWUNc" }
  ]
}

let keyFreqMap = {};

function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

function getUniqueKey(base) {
  const count = keyFreqMap[base] || 1;
  keyFreqMap[base] = count + 1;
  return `${base}-${count}`;
}

export function stripKeys(node) {
  const { key, ...rest } = node;
  if (Array.isArray(rest.items)) {
    return {
      ...rest,
      items: rest.items.map(stripKeys),
    };
  }
  return rest;
}

export function initTree(json) {
  keyFreqMap = {};
  function traverse(node) {
    const base =
      node.id ? `${node.type}-${node.id}` :
      node.name ? `${node.type}-${slugify(node.name)}` : `${node.type}`;
    const key = getUniqueKey(base);

    const newNode = { ...node, key };
    if (Array.isArray(node.items)) {
      newNode.items = node.items.map(traverse)
    }
    return newNode;
  }
  return traverse(json)
}

export function getAllKeys(node) {
  let keys = [node.key];
  if (Array.isArray(node.items)) {
    node.items.forEach(child => {
      keys = keys.concat(getAllKeys(child));
    });
  }
  return keys;
}