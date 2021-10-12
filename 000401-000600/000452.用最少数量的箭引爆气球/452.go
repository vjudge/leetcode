package main

// 方法一: 用时 232ms
// 执行用时超过了 45%
// 消耗内存超过了 32%
// 难度: 中等
func findMinArrowShots(points [][]int) int {
    if len(points) == 0 {
		    return 0
	  }
	  sort.Slice(points, func(i, j int) bool {
		    return points[i][1] < points[j][1]
	  })
	  ret := 1
	  curLast := points[0][1]
	  for i := 0; i < len(points); i++ {
		    if points[i][0] > curLast {
			      ret ++
			      curLast = points[i][1]
		    }
	  }
	  return ret
}

func main () {

}
