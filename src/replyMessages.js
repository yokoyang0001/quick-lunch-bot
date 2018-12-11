const randomReply = () => {
  const shops = [
    {
      type: 'text',
      text: '「つるとんたん」にしよか',
    },
    {
      type: 'text',
      text: 'KITTEのホルモンうまかったすね',
    },
    {
      type: 'text',
      text: 'やまやの明太子チャレンジすっか',
    },
    {
      type: 'text',
      text: 'やっぱトリドリ？',
    },
    {
      type: 'text',
      text: '赤のれん(ラーメン)行ってみっか',
    },
    {
      type: 'text',
      text: 'あのシャレオツなカレー行きますか',
    },
  ]
  const random = Math.floor(Math.random() * (6));
  return shops[random];
};

const KITTE_WA = [
  [
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
  ]
]

const KITTE_YO = [
  [
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
  ]
]

const KITTE_CHU = [
  [
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
  ]
]

const SHINMARU_WA = [
  [
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
  ]
]

const SHINMARU_YO = [
  [
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
  ]
]

const OTEMACHI_WA = [
  [
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
  ]
]

const OTEMACHI_YO = [
  [
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
    {
      imageUrl: '',
      action: {
        type: 'url',
        url: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/24836/24836662.jpg?token=1cd3a8a&api=v2',
        label: ''
      } 
    },
  ]
]

export default {
  "スタート": {
    type: 'text',
    text: 'どこで食う？',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            label: 'KITTE',
            text: '[1] KITTE'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '新丸ビル',
            text: '[2] 新丸ビル'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '大手町',
            text: '[3] 大手町'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '店ランダム',
            text: '[4] 店ランダム'
          }
        },
      ]
    }
  },
  "1": {
    type: 'text',
    text: '何食う？',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            label: '和',
            text: '[5] 和'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '洋',
            text: '[6] 洋'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '中',
            text: '[7] 中'
          }
        },
      ]
    }
  },
  "2": {
    type: 'text',
    text: '何食う？',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            label: '和',
            text: '[8] 和'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '洋',
            text: '[9] 洋'
          }
        },
      ]
    }
  },
  "3": {
    type: 'text',
    text: '何食う？',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            label: '和',
            text: '[10] 和'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '洋',
            text: '[11] 洋'
          }
        },
      ]
    }
  },
  "4": this.randomReply,
  "5": {
    type: 'template',
    altText: '',
    template: {
      type: 'image_carousel',
      columns: this.KITTE_WA
    }
  },
  "6": {
    type: 'template',
    altText: '',
    template: {
      type: 'image_carousel',
      columns: this.KITTE_CHU
    }
  },
  "7": {
    type: 'template',
    altText: '',
    template: {
      type: 'image_carousel',
      columns: this.KITTE_YO
    }
  },
  "8": {
    type: 'template',
    altText: '',
    template: {
      type: 'image_carousel',
      columns: this.SHINMARU_WA
    }
  },
  "9": {
    type: 'template',
    altText: '',
    template: {
      type: 'image_carousel',
      columns: this.SHINMARU_YO
    }
  },
  "10": {
    type: 'template',
    altText: '',
    template: {
      type: 'image_carousel',
      columns: this.OTEMACHI_WA
    }
  },
  "11": {
    type: 'template',
    altText: '',
    template: {
      type: 'image_carousel',
      columns: this.OTEMACHI_YO
    }
  },
}
