const app = "I don't do much."

var kittens = function(array) {
  return array;
}

var destructivelyAppendKitten = function(name) {
  kittens.push(name)
  return kittens
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name)
  return kittens
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift()
  return kittens
}

var appendKitten = function(name) {
  return [...kittens, name]
}

var prependKitten = function(name) {
  return [name, ...kittens]
}

var removeLastKitten = function(name) {
  return kittens.slice(0, kittens.length -1)
}