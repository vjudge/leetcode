package main

// 方法二: 用时 0ms
// 执行用时超过了 100%
// 消耗内存超过了 100%
func mySqrt(x int) int {
  if x == 0 {
    return 0
  }
  ret := int(math.Exp(0.5 * math.Log(float64(x))))
  if (ret + 1) * (ret + 1) <= x {
    return (ret + 1)
  }
  return ret
}

func main () {

}
