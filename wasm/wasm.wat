(module
  (type (;0;) (func))
  (type (;1;) (func (param i32) (result f64)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32) (result f64)
    (local f64 i32)
    loop (result f64)  ;; label = @1
      local.get 0
      i32.load
      local.tee 2
      if (result f64)  ;; label = @2
        local.get 2
        i32.const 12
        i32.add
        local.set 0
        local.get 1
        local.get 2
        f64.load
        f64.add
        local.set 1
        br 1 (;@1;)
      else
        local.get 1
      end
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "listSum" (func 1)))
