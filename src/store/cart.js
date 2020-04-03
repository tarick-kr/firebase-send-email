export default {
  state: {
    listProductsInCart: [
      {
        id: 'prod1',
        titleProduct: 'Шар',
        urlImage: 'https://firebasestorage.googleapis.com/v0/b/fb-send-email.appspot.com/o/images-products%2F1.jpg?alt=media&token=0e94877e-81f8-4edf-912b-38cfa157ee4d',
        quantity: 5,
        productParams: [
          {
            id: 'param1-prod1',
            name: 'Диаметр',
            sym: 'D',
            unit: 'мм',
            value: 300
          }
        ],
        productSelectParams: [
          {
            type: 'Type1',
            name: 'Вес',
            sym: 'w',
            unit: 'кг',
            value: '1'
          },
          {
            type: 'Type2',
            name: 'Материал',
            value: 'Оц. сталь'
          },
          {
            type: 'Type3',
            name: 'Цвет',
            value: 'Белый'
          }
        ]
      },
      {
        id: 'prod2',
        titleProduct: 'Цилиндр',
        urlImage: 'https://firebasestorage.googleapis.com/v0/b/fb-send-email.appspot.com/o/images-products%2F2.jpg?alt=media&token=fbf6de4f-087a-4b3e-ae75-8e13fa8b0a69',
        quantity: 9,
        productParams: [
          {
            id: 'param1-prod2',
            name: 'Диаметр',
            sym: 'D',
            unit: 'мм',
            value: 600
          },
          {
            id: 'param2-prod2',
            name: 'Высота',
            sym: 'h',
            unit: 'мм',
            value: 1000
          }
        ],
        productSelectParams: []
      },
      {
        id: 'prod3',
        titleProduct: 'Прямоугольный параллелепипед',
        urlImage: 'https://firebasestorage.googleapis.com/v0/b/fb-send-email.appspot.com/o/images-products%2F3.jpg?alt=media&token=f6064260-6fc7-444f-bd75-c5af375fc445',
        quantity: 3,
        productParams: [
          {
            id: 'param1-prod3',
            name: 'Сторона',
            sym: 'a',
            unit: 'мм',
            value: 500
          },
          {
            id: 'param2-prod3',
            name: 'Сторона',
            sym: 'b',
            unit: 'мм',
            value: 800
          },
          {
            id: 'param3-prod3',
            name: 'Сторона',
            sym: 'c',
            unit: 'мм',
            value: 1050
          }
        ],
        productSelectParams: [
          {
            type: 'Type1',
            name: 'Вес',
            sym: 'w',
            unit: 'кг',
            value: '0.5'
          },
          {
            type: 'Type2',
            name: 'Материал',
            value: 'Пластик'
          },
          {
            type: 'Type4',
            name: 'Цвет',
            value: 'Берюзовый'
          }
        ]
      }
    ]
  },
  getters: {
    getListProductsInCart: (state) => {
      return state.listProductsInCart
    }
  }
}
