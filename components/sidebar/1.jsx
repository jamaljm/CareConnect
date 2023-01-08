import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Sidebar() {
  return (
      <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
            <div className="h-full bg-white rounded-2xl">
                <div className="flex items-center justify-center pt-6 px-6">
                   <img src='/images/logo.png' alt=''/>
                </div>
                <nav className="mt-6">
                    <div>
                        <Link className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-white hover:bg-blue-300" href="/dashboard">
                            <span className="text-left">
                               <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAADO0lEQVR4nNWTSWgTURjHx26ZppaCiCLoQUWFgghWOzMuBMStBQ9epAjiwQU3EHE7uLSCXtwQsfSgrQet9aIH7UEs2pjEJl1s0yxto9napG2SSdKmmUmnBf3kezpDbTOp20EHfgwzb77/773vvaGof+3q5rKO2XUFQbz/9XCgqDkfuOwrVi4bZDqZ7LtAUVl/ReAopvI6uJz6Ti4HCJvob3cuB/A9jv+ZQEfNbWNzX7VzuYBYD+kg6LSC9eg28oy0cnn6jhKq6LcEHSXaRRZW09XK5gHSfb4C+NAwSJIEUT4Ctov7yXvEzGqcbevoJb8ksJTmFZtZzYCZ1YCZo8Fx8wyMjIzA5OQkTExMEGKxGDiqq8g4ftfCaoYtpblrfkpg2kBzJo6OmlgaTJsKoefRXUgkEkq4JEkKKHY21MD7zUVAvmfpUQNL6zIKjOvzdxsY7biByQejbj64XtTD2NjYDMH4+LjC6Ogo9LxsANOWBYB170rzJwwMXZFWoGfyTzYz2s96RgumsqXgNrwGURRVw1OplAKu1GVoAmP5csD6Zkb7Rc9oz/8geMvSG98wWkCMe9ZCv6OLFM8WLooiQRAEIvJY20m9nIW5iqSSorKa1hfUmQ5uTw163YrgZ8IFQYBkMknA1vldvWA8sDWFeZg7o2U8z/unBs8WLnwX4L4huBo8DIFAwK+68ZIk+eTwoav7wFtWOAP+eTUJf9E/Bqsbo7DqWRiWPRmCg00hshKUxONxn6oklUr55FkHz+5MKwnVVZFZ1/WNKILFDwOw61lQFkA0GlWXiKJIJNiSwJkdqpJEIgEPnHFFsLDGD2VPB8gPivA8ry4RBMEn911NMlxbSdpSa+MVwbw7Hih/7McVEGaVyBuqJhl6cJm0JRyNgcnDg+FTBPR9YXAFeAyHSCSCqEuSyaRPPo6ZJPF4nLRlyszlcAiHw0hmiXwUB05vTysZvH8pUziEQiFEXdLnHWx0+YdaEPeRDYl0kk/Xjwd6PYGW6TjdAwqOj/2NqhKL3dttsXsB6TuxJe1K7LfPkfFMmG0eq6qk1epZaXZ4D1ls3sP2G6fu9VzY+2g6XbW3ruG4GlhvdrpXqEr+6+srukFCYyrFjjkAAAAASUVORK5CYII="/>
                            </span>
                            <span className="mx-4 text-sm font-medium font-body">
                                Home
                            </span>
                        </Link>
                        <Link className="flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100" href="/doctors">
                            <span className="text-left">
<img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAADM0lEQVR4nOWVbUhTURjHj70qaaGVFYJJEFSUr1BplGHUvbNpmbvbzKWlOK1UajncjNKEoKhkBUX0orIydfdmhrlFlt6rlCFIYSQFlRT0oS8S5peM/MeZ29qw7Gp968DDOc9zznl+93/O5TmE/D/N9jCM8FIFEaQOIogvCS9+JLz4mgjiYyJIp8htacnfQwTpCREkTGC3/ip/eSY7d1b9g5GJIAF1jrdTBuj1cTMNGak9f1CBwButMKmYqilBzCq28mC2ZkIAESRM49thVitGTenstkkBjKmpQWaOGcrRZ3uSzWh8hCDrPYResyHEehfBDQ7PnCFjB8wc0zVJFUy+mWNxSJcGCirRpoD6x7Us2k4mY6QlBXCkoO3sDmTn58CoVdL50VINEyEfwjFNNKm31RmTMcgrncm9raE02bPGpGIzZUNMKvaDe6NFr8Cb6vHJ4bK+S9t/foyKOSMLYMhQLvBWQJN8b1Wi50y8T3Lq07gPhGMaZB4Vu2ocxK7Ec8sGHwj1adxXCdsm76g4Jt4b8rRKMfK7o4IjBd1V7FfPnXBspyxImZphvCEX9JsGJoKcz0t857W+RZ6S3duDTSrmjnujNiGmu7E04ZeA2pIEaOJjul1/Vm85ty1EFsSjSKXIMnHsFy4hrjtx82ageh7QuBIQYsf66nnYmLQF6viYpyaOeWbauWU+mUor1qlXR2flDsSmZWD0sh9wmXiM+jQeuSf3bUGBLnRKAGLriCa81B929DSWHinH1RqlD4T6y4rKsPiEBYSXXhCbuGZyAL5zHRGkYVqXIgwVWHLsHEL4Fny6EuwE0J76YWWnEV5SOVbDeHGI2Lri5AFqOvyJIL53FsXaFixX7EL4Hj0I3wFd3VEnhPbT69uwfL8Rkdpc+F9vdhVL8R2x22fLUCFlu6vron2F2Ft4GEmp6Qg8edEZM1vznH3E4WNYkVuMcGMlorgs+PGiS1Gn7s8Q+py6IAuKyrA1TYPYxK0IsFh93pH1+w5gzrUm53ht1n4EXh8bE0G8KUOJeJ8I4iA1P1v7YFCFZTigqmbIHXObve/V94XNXZ/puKa3/1uU/cnYGl5yyLuXf9x+AEGvxm/yzbhJAAAAAElFTkSuQmCC"/>                            </span>
                            <span className="mx-4 text-sm font-medium font-body">
                                Doctors
                            </span>
                        </Link>
                        <Link className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-white hover:bg-blue-300" href="/ambulance">
                            <span className="text-left">
                               <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwElEQVR4nO2S609TZxzHuxd7sSz7C5b9A9sLZOeAgMuAllsZVG61IAh4QVbtFHcrsMAWzJyCgMVSrnPKig5HuBRaqS0tPVhaaGnLCq5QWMvAKfeCm8kSwnc5Z7Ozwakv9tJf8kl+ec75Pp/nxmK9rJf1ZFkX12qKrZsriZ2e3zOvjPo8Ho/1RfF6vWaXy6WgKOpt1n+Vz2ktdd2dwW3Khj6VAbo+DRbv6LE4TKPDIqXDAo2BZhALQ/+gH8SvOhotZlRKDN9or3mqAMCrj/raH/0hKcfDT3Ox9ckhbBblYPNUNnyibGycOIiND7OwfjwT60cFWDsiwGoeHyuHMrCSnY6VrHQsC9Iwn8aDRXTS8FRJz6DxqmpoBG73LObm5tDc3oVLVzpQ2/oDalpvgBoxw+Px4CenE7Ozs/B6vbuYmpqC3eGAXq+X7xJcaO15o7rftSNqGYXRZMYF2RXsr7Ehpc7p50BpM2ZmZnB/+QGcTicz6YKRwoPGS36Je9YNq8UCnU6n3CX55pp6rOzmFIRnW3BLo0UwJxXcr6kAeGckjGTpMB+TI3cwP+3Cb53XsSrMwfzdKczPzWG29GNY6y7SOxkKELS1qV+v+H5kJ79SiUG9AZ9VXEQQJwPR4t4AuMLzzGqnp6eZY1vLS4EvYS988SHwccOw2PMj3G43c2Q6nc4aIPmqoct0RqZHwRcSuKanse/AaQRx0hEuvMoQdrwJcUfKIe/o3HUH9/q6sCrKCxhzuVzQarUuv6C6+uZr4suKnczPL2Pc7sDZqloQvEIEZ9cgOOs8orLFaOvoYsKP7+FJFsxG3G9reZpkwS85Vy8fKL90DeYxK/Oi1IN6tFyTo1Xegc7ePuYV0eM0ExMT/v5Z0MelaJJu+SUPvq1+uF4uxNbJNGwJU7FZmIKNAh58R3nYOJyMjfxkbOQmYz0nCWtZiQyrAi5W+QlYSU/Acmo8lvfHYSk5DktJsVhKjIE3NhpdsRE7fonFMYF73Tkw9ffAobmFSZ0GdrUKVlUfbANKpn/MqKIH9gHVv9z6G6dGjUnNbUyoB2BTKWHq6cb1E+HbfsncuAITXWIYjUaMj49jbGxsh6KobZvNBrPZTD9FGAwGBq1W6+9p6IzdbofFYtkxGo3bDoeD7qHRaPBdY8MjRsBJzwyW1l3Y/vLceXT3KiAWi0EQ7yIiIhyRkZHo7+9nJqMoimFoaIgR05hMJuZbSUkJSJJAREQEoqIicaOjA/WNzSirOPsnI9kbxysOjU0GyU5EUroAiYlcNDU1QSaToajoNEJCSCgUCmby4eHhANRqNerq6sDlJjAZqVSKoqIikCGhCOVw8U7oe2AkIfEp4XvejwUZkwQiNAxlZWVQKpXMSmtraxEdHQ2prAH1jU1oaG4JQCKtxwGBAKWlJcyOR0dHIZFIwGazt/kHczc/SM342X8nCan8jFhexgBBkhdFopPo7e2FXC5HZWUl2OxoW/6x48M5h4/dzcrNdzxJfkHhL1HsGJlQKPRnqqqqEB8fr2U9qzgc9s1Tpz5CSUkx+PyMTYIg9j4zwGKx2OyodpFIhOJiMQQCwUOCIPY9L/MKQRBxBLEnNygo6M3n/fw4Q5J7YgiCyCNJ8q0XzPy/9Re7cEOYTdBXmgAAAABJRU5ErkJggg=="/>
                            </span>
                            <span className="mx-4 text-sm font-medium font-body">
                                Ambulance
                            </span>
                        </Link>
                <Link className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-white hover:bg-blue-300" href="/medicine">
                            <span className="text-left">
                                <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAACcElEQVR4nOXWy2sTQRwH8F/V4oNCkQqiIP4RSYMtSA7NIUIphZ1JTJt2VsUIFUU8FaEEL57Ek5ei3bWFiBS9+AaheYmlWl9oqdWGsLupkEtFsTRK7Vc2NcXUfcT2JH5hLsuP+bC/mZ1Zov8u8Hj21FTn929bP+L1Bmqqa24OuRcNUxNUasMobber8SO+RSrIgunitmTIk0wXt7gmh+OIb3IHErQTCn2ESoBC41Y1PBdrZLqc5PnTCL9JIPLiEcJvR8C0k2C6uBN8f2qrM6LSgTKwgixjkHasBSRDngh9OI/u9BdEx7A6ujPzYPmzkAz5ojMySPVQ6D4UWoJKl2yB1EIVUBmRiecmssiLfQ3ubRulzdZAHNH0V0ugPJLfwPSjkApyq/XELS37rZ5XAObwBqsjVSojvNDTYo14vX47oGMmjl3X5xHKGo5I5Okzc/EX2udiVWtpm7UtCoxNo3G4hFDGBsp8AsufgaSLC+sCKhMFTOhaCTyjVQPpz+C5c2CGeBibjNWjtXUvfL6D9kCxr8FpkQNrod8AkRflIwVEdfB46m0RyRBKaHbAcZHbTGhkEezxNHiuvwpwzeHcsd2SLi91PZl13kVjQFv6JYLv/hJYeYveQ0w7gWhy2RlJ/9miSqDQPqg0gKtk+UkQ10WQazFEkz/WBZiBQuqvoylBVuks9DRJhvjeNT5ju015rt88Oh7YtQhD1A6FXkOlTrILM+TL5kTd2WL1AZidcwVqCny+HnMCpot7ZtvCU0OIvLqL8NQVMP04mC7f3BBQrVEdN44wyRA3JEOkJEMkuNbbYT53uylrvUE3dOejxn+BfzM/AbSGnKlUiuldAAAAAElFTkSuQmCC"/>
                            </span>
                            <span className="mx-4 text-sm font-medium font-body">
                                Medicine Finder
                            </span>
                      </Link>
                        <Link className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-white hover:bg-blue-300" href="/videocallpage">
                            <span className="text-left">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoUlEQVR4nO3Uu0/CQADHcfwDaCKByquAo7sJ1X/BuAAt7wqFmTP+CzrKqIK8H/KyTDoYJzfF8N9wJk6eOQpXCtVjh0s+S4fvL016NZm2Z3OPb5i98inZ8fpkwqvII48iB9cYyUz2h1lEKFgG+RY9zsmEdzDTl58MsjsW4D/QRpQMpIYGWBp5+3qefhpxvdTzYt0Mjo8Y4H83A/6LPPQOZEgLeXqpVV2VuytNR3YvDjkG8E0G8D8M4JE5x0My4umn4f+hM8TNdRZJU65W4oUB/DUD/N84Pqcf6aYgRwlxDxJy6ySRu61y1qKfi3HDEa4jQRzSRyQSmXNhLSyh4yhH6CPudhLSQq6mytmMaxoq9iY4YnL+t2Xmc/6VjLhacWgYaiyLIWc9hhxLbPlT+ps46zFICzlqUR07VlVZ8yf0EUctCg1Ds4i9GtFUNHtTYcQWQvSvy16JwL9DYVXZQElELHYv0u8JWxahYagkaqESCc4IhK0o0G88WxInqyFhOYQ0IVWBoP+7bEXh0lYQxpqgISt2F9C7DXxYCsGAwcj2bPr5BeSsZmfbtrlvAAAAAElFTkSuQmCC"/>                            </span>
                            <span className="mx-4 text-sm font-medium font-body">
                                Video call
                            </span>
                        </Link>
                        
                    </div>
                </nav>
            </div>
        </div>
  )
}
