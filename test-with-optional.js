const protoLoader = require('@grpc/proto-loader');

protoLoader.loadSync('proto/with_optional.proto');

console.log(`Success?`);
