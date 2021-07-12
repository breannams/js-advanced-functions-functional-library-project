const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const numbers in collection){
        callback(collection[numbers])
      }
      return collection
    },

    map: function(collection, callback) {
      let array = []
      for(const numbers in collection){
        array.push(callback(collection[numbers]))
      }
      return array
    },

    reduce: function(collection, callback, acc = 0) {
      if (acc === 0 ){
        acc = collection[0]
        collection = collection.slice(1)
      }
      for (let i = 0; i < collection.length; i ++){
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
