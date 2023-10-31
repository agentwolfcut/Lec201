## forEach 
ไม่่returnอะไรออกมา แค่พาเข้าไปในแค่elementจนครบ
## filter 
คืนค่าelementที่ผ่านเงื่่อนไข
(สร้างarrayใหม่่และกรองelementarrayที่ผ่านเงื่่อนไขCallBackFunction(arrowfunctiom))
## map 
คืนค่าทุกelementที่่เราสั่งให้คำนวณ หรือให้เลือกตามcloumnออกมา(ถ้าเป็นobj)
(จะทำการreturn arrayใหม่แต่ค่าที่returnออกไปมีจำนวนท่ากับขนาดarrayที่รับมา)
## find
ไม่return arrayใหม่จะreturnค่าแรกที่เจอ
## findIndex
เหมือนfindแต่return index ex.(array[i])
## every
return boolean(true,false)|เข้าไปในทุกelement และทุกelementต้องผ่านเงื่อไขของ callbackfunctionถึงจะreturn true ไมผ่่านตัวนึงreturn false
## some
return boolean(true,false)|เข้าไปในทุกelement และถ้ามีอย่างน้อย 1 elementผ่านเงื่อไขของ callbackfunctionถึงจะreturn true ไมผ่่านทั้งหมดreturn false
## reduce
ลดรูป ยุบค่า (รับ2ค่่า reduce(total,currentValue))
# stack & queue
## push
เพิ่มท้ายarray one or more element ไม่return new array แต่ return new length of array
## pop
ลบตัวท้าย และ return elementนั้น
## shift
ลบตัวแรก และ return elementนั้น
## unshiift
เพิ่มต้นarray one or more element ไม่return new array แต่ return new length of array
## splice
เป็นการเปลี่ยน element ในarray สามารถremove replace add (ex.splice(1,0,'meow') 1 คือเลือกตำแหน่งindexที่ 1, 0 คือลบกี่่จำนวน, 'meow' คือค่าที่เอามาใส่)
## slice
return new array (ex.slice(2,4) 2 คือเลือกตั้งแต่indexที่่2 4คือตัวที่เท่าไหร่่(นับตั้งแต่เริ่ม) จากข้อนี้คือ เลือกตั้งแค้indexที่ 2 ถึงตัวที่4
## fill
เปลี่ยนค่า elementใน arrayที่เป็นstatic (ex. fill(0,2,4) 0 คือ เลขที่ต้องการเปลี่ยน 2 คือเริ่มเปลี่ยนตั้งแต่indexที่2 และ4คือเปลี่ยนถึงตัวที่่4(ไม่ใช้indexนะจ้ะ))
## includes
return boolean true false 
## reverse
กลับค่าของarray
## sort
เรียงลำดับ array
## concat
ต่อ array
## indexOf
หาค่าelementที่่เจอถ้าเจอ จะ +1 ไมเจอ -1
## split
เปลี่ยนStringเป็นarray
## join
เปลี่ยนarrayเป็นString


## วิธีการอ้าง callback function มี 3รูปแบบ
1)arrow function
2)Named function
3)Anonymous function

![image](https://github.com/sMercyX/js/assets/110713142/bbe24446-10b4-40ef-8964-855ec5886e85)

primenum
![image](https://github.com/sMercyX/js/assets/110713142/798d1e1a-76e1-4f11-a7c7-355ffb4f5df9)

