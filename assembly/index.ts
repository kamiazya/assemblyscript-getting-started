// The entry file of your WebAssembly module.

class Hoge {
  foo!: string;
}

export function hoge(): Hoge {
  return { foo: 'bar' };
}
