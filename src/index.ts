import { TWallpaper } from 'twallpaper'
import type { TWallpaperOptions } from 'twallpaper'
import 'twallpaper/dist/twallpaper.css'

const container = document.querySelector('.tw-wrap')
const options: TWallpaperOptions = {
  tails: 10,
  colors: ['#efd359', '#e984d8', '#ac86ed', '#40cdde'],
  pattern: {
    image: 'https://crashmax-dev.github.io/twallpaper/patterns/animals.svg'
  }
}

const wallpaper = new TWallpaper(container, options)

wallpaper.updatePattern({
  ...options.pattern,
  opacity: 1
})

wallpaper.updateFrametime(90)
