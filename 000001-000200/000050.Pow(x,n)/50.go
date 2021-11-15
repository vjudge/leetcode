package main

import "fmt"

//// 方法一: 用时 0 ms
//// 执行用时超过了 100 %
//// 消耗内存超过了 100 %
//// 难度: 中等
//func myPow(x float64, n int) float64 {
//	if n == 0 {
//		return 1
//	}
//	if n == 1 {
//		return x
//	}
//
//	tmpN := n
//	flag := false
//	if n < 0 {
//		tmpN = -n
//		flag = true
//	}
//
//	var ret float64 = 1
//	for tmpN > 0 {
//		if tmpN % 2 == 0 {
//			x = x * x
//			tmpN /= 2
//		} else {
//			ret = ret * x
//			tmpN -= 1
//		}
//	}
//	if flag {
//		ret = 1 / ret
//	}
//	return ret
//}

// 方法二: 用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 59 %
// 难度: 中等
func myPow(x float64, n int) float64 {
	if n == 0 {
		return 1
	}

	if n < 0 {
		return 1 / myPow(x, -n)
	}

	if n % 2 == 1 {
		return x * myPow(x, n - 1)
	}

	return myPow(x * x, n / 2)
}

func main ()  {
	fmt.Println(myPow(2.00000, 10))
	fmt.Println(myPow(2.10000, 3))
	fmt.Println(myPow(2.00000, -2))
}
