const protoLoader = require('@grpc/proto-loader');

protoLoader.loadSync('proto/without_optional.proto');

console.log(`Success?`);
