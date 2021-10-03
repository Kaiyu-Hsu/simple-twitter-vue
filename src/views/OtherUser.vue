<template>
  <div>
    <Navbar :initial-user="userData" />
    <div class="show-user">
      <header>
        <div class="icon-back">
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 5.99988H3.41399L7.70699 1.70687C8.09699 1.31687 8.09699 0.683875 7.70699 0.292875C7.31699 -0.0981249 6.68399 -0.0971249 6.29299 0.292875L0.292988 6.29288C-0.0970117 6.68288 -0.0970117 7.31588 0.292988 7.70687L6.29299 13.7069C6.48799 13.9019 6.74299 13.9999 6.99999 13.9999C7.25699 13.9999 7.51199 13.9019 7.70699 13.7069C8.09699 13.3169 8.09699 12.6839 7.70699 12.2929L3.41399 7.99988H16C16.553 7.99988 17 7.55288 17 6.99988C17 6.44688 16.553 5.99988 16 5.99988Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="name-tweets">
          <div class="name">{{ userData.name }}</div>
          <div class="tweets">{{ tweetsNum }} 推文</div>
        </div>
      </header>
      <div class="user-info">
        <!-- background cover -->
        <div class="background-cover">
          <img class="cover" :src="userData.cover" />
        </div>
        <div class="avatar-btn">
          <!-- avatar -->
          <img class="avatar" :src="userData.avatar" />
          <!-- btn-message -->
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17" stroke="#FF6600" />
            <path
              d="M23.8438 9.64062H11.1562C9.82888 9.64062 8.75 10.7204 8.75 12.0486V22.9817C8.75 24.31 9.82888 25.3906 11.1562 25.3906H23.8438C25.1711 25.3906 26.25 24.31 26.25 22.9817V12.0486C26.25 10.7204 25.1711 9.64062 23.8438 9.64062ZM11.1562 10.9531H23.8438C24.4475 10.9531 24.9375 11.4431 24.9375 12.0469V12.6716L17.8938 17.3678C17.6549 17.5253 17.346 17.527 17.1062 17.366L10.0625 12.6716V12.0469C10.0625 11.4431 10.5525 10.9531 11.1562 10.9531ZM23.8438 24.0764H11.1562C10.5525 24.0764 10.0625 23.5864 10.0625 22.9826V14.2099L16.3975 18.4361C16.7326 18.6601 17.1167 18.7721 17.5 18.7721C17.885 18.7721 18.2674 18.6601 18.6025 18.437L24.9375 14.2108V22.98C24.9375 23.5838 24.4475 24.0738 23.8438 24.0738V24.0764Z"
              fill="#FF6600"
            />
          </svg>
          <!-- btn-noti turn off -->
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17" stroke="#FF6600" />
            <path
              d="M27.3351 9.85253H25.2132V7.72803C25.2132 7.36578 24.9192 7.07178 24.557 7.07178C24.1947 7.07178 23.9007 7.36578 23.9007 7.72803V9.85253H21.7788C21.4166 9.85253 21.1226 10.1457 21.1226 10.5088C21.1226 10.8719 21.4166 11.165 21.7788 11.165H23.9016V13.286C23.9016 13.6483 24.1956 13.9423 24.5578 13.9423C24.9201 13.9423 25.2141 13.6483 25.2141 13.286V11.165H27.336C27.6991 11.165 27.9922 10.8702 27.9922 10.5088C27.9922 10.1474 27.6982 9.85253 27.336 9.85253H27.3351ZM21.8838 16.5078C21.9013 14.378 21.1996 12.4854 19.9081 11.179C18.7496 10.0048 17.1816 9.35553 15.4928 9.34765H15.4815C13.7927 9.3564 12.2247 10.0039 11.0662 11.1782C9.77559 12.4863 9.07384 14.3789 9.09134 16.5087C9.12284 20.125 7.40872 21.49 7.34134 21.5425C7.11384 21.7114 7.02022 22.0063 7.10859 22.2758C7.19784 22.5453 7.44984 22.7264 7.73159 22.7264H11.8581C11.9543 24.6742 13.5556 26.2325 15.5278 26.2325C17.5001 26.2325 19.1005 24.675 19.1976 22.7264H23.2445C23.5245 22.7264 23.773 22.5462 23.8631 22.2802C23.9532 22.0141 23.8631 21.7175 23.64 21.5469C23.5682 21.4909 21.8523 20.125 21.883 16.5069L21.8838 16.5078ZM15.527 24.92C14.2792 24.92 13.2642 23.9488 13.1697 22.7255H17.8842C17.7897 23.9505 16.7747 24.9192 15.527 24.9192V24.92ZM9.14822 21.4139C9.76247 20.4558 10.4231 18.8729 10.403 16.4982C10.3881 14.6939 10.9402 13.1732 11.9998 12.1013C12.9125 11.1773 14.1506 10.6663 15.4876 10.661C16.8237 10.6672 18.0627 11.1773 18.9745 12.1013C20.0332 13.174 20.5845 14.6939 20.5696 16.4982C20.5503 18.8729 21.2101 20.4558 21.827 21.4139H9.14822Z"
              fill="#FF6600"
            />
          </svg>
          <!-- btn-noti turn on-->
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="17.5"
              cy="17.5"
              r="17"
              fill="#FF6600"
              stroke="#FF6600"
            />
            <path
              d="M27.6584 7.1313C27.3302 6.9703 26.9391 7.10505 26.7781 7.4288L24.2721 12.4828L22.782 10.899C22.5344 10.6339 22.1187 10.6225 21.8545 10.871C21.5902 11.1195 21.578 11.536 21.8265 11.7985L23.9641 14.07C24.0892 14.2013 24.2616 14.2757 24.4419 14.2757C24.4734 14.2757 24.5057 14.273 24.5381 14.2687C24.7507 14.2372 24.9336 14.1024 25.0299 13.9099L27.9541 8.01242C28.1151 7.68692 27.9821 7.29317 27.6566 7.13217L27.6584 7.1313ZM23.6404 21.5469C23.5677 21.4909 21.8519 20.125 21.8816 16.5069C21.9009 14.378 21.1991 12.4854 19.9076 11.1782C18.7491 10.0057 17.1811 9.35555 15.4924 9.34767H15.481C13.7922 9.35642 12.2242 10.0039 11.0657 11.1782C9.7751 12.4863 9.07335 14.3789 9.09085 16.5087C9.12235 20.125 7.40823 21.49 7.34085 21.5425C7.11335 21.7114 7.01973 22.0063 7.1081 22.2758C7.19735 22.5453 7.44935 22.7264 7.7311 22.7264H11.3011C11.3781 24.9752 13.22 26.7864 15.488 26.7864C17.756 26.7864 19.5987 24.9752 19.6749 22.7264H23.2466C23.5266 22.7264 23.7751 22.5462 23.8652 22.2802C23.9554 22.0142 23.8635 21.7175 23.6412 21.5469H23.6404ZM15.4871 24.9489C14.2324 24.9489 13.2121 23.9628 13.1386 22.7264H17.8356C17.7612 23.9628 16.7419 24.9489 15.4871 24.9489Z"
              fill="white"
            />
          </svg>
          <!-- btn-follow -->
          <div
            class="btn-unfollow"
            v-if="currentUserFollowings.includes(userData.id)"
            @click="unfollowing(userData.id)"
          >
            <svg
              width="90"
              height="35"
              viewBox="0 0 90 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="89"
                height="34"
                rx="17"
                fill="#FF6600"
              />
              <path
                d="M23.91 22.995V19.05H28.14V17.31H23.91V14.01H28.92V12.27H16.215V14.01H22.005V22.995H19.41V16.335H17.535V22.995H15.69V24.75H29.325V22.995H23.91ZM40.575 19.86H43.545V18.21H40.575V15.72H38.775V18.21H35.73V19.86H38.775V23.28H35.145V24.93H44.13V23.28H40.575V19.86ZM36.87 13.365C37.08 12.825 37.275 12.285 37.44 11.73L35.565 11.28C35.385 11.97 35.16 12.66 34.905 13.365H30.855V15.075H34.11C33.21 16.8 31.95 18.375 30.375 19.395C30.66 19.83 31.065 20.64 31.26 21.12C31.74 20.79 32.16 20.46 32.58 20.07V25.29H34.395V18.03C35.085 17.115 35.655 16.11 36.15 15.075H44.175V13.365H36.87ZM47.61 13.365H49.815V15.3H47.61V13.365ZM51.315 21.75C50.805 21.885 50.295 22.005 49.785 22.14V19.95H51.36V18.405H49.785V16.8H51.42V11.865H46.095V16.8H48.225V22.515L47.46 22.68V17.91H46.035V22.995L45.345 23.145L45.75 24.825C47.37 24.39 49.515 23.835 51.495 23.28L51.315 21.75ZM53.61 16.035H57.06V17.25H53.61V16.035ZM57.06 13.44V14.595H53.61V13.44H57.06ZM58.335 18.93C57.9 19.41 57.24 19.995 56.625 20.46C56.385 19.935 56.205 19.38 56.04 18.795H58.695V11.91H51.9V22.665C51.9 23.355 51.51 23.76 51.21 23.955C51.465 24.27 51.84 24.96 51.96 25.35C52.32 25.125 52.875 24.9 55.83 24.15C55.77 23.775 55.74 23.04 55.755 22.53L53.61 22.995V18.795H54.57C55.245 21.705 56.355 24.015 58.44 25.26C58.695 24.765 59.205 24.06 59.565 23.715C58.665 23.265 57.915 22.575 57.345 21.735C57.99 21.3 58.77 20.715 59.445 20.19L58.335 18.93ZM67.545 13.875C67.335 13.26 66.885 12.3 66.495 11.55L65.16 11.955C65.52 12.705 65.97 13.695 66.165 14.355L67.545 13.875ZM69.765 15H70.815V15.825H68.97C69.255 15.525 69.54 15.21 69.78 14.85L69.765 15ZM67.44 18.195L67.185 18.24H66.75C67.08 17.475 67.425 16.485 67.71 15.69C67.935 15.945 68.16 16.23 68.265 16.425C68.445 16.29 68.61 16.155 68.775 16.005V16.8H74.25V15.825H72.345V15H73.905V14.025H70.275C70.38 13.83 70.47 13.635 70.56 13.425H74.37V12.285H70.98C71.07 12 71.145 11.715 71.205 11.43L69.885 11.235C69.81 11.595 69.72 11.94 69.6 12.285H67.59V13.425H69.105C68.805 13.98 68.43 14.46 68.01 14.865L67.005 14.595L66.78 14.7H64.92V16.215H66.18C65.895 17.055 65.595 17.91 65.445 18.15C65.31 18.405 65.16 18.525 64.995 18.6C64.89 17.925 64.62 17.19 64.095 16.38C64.47 15.195 64.905 13.635 65.235 12.39L64.26 11.835L64.035 11.88H61.005V25.26H62.415V13.47H63.54C63.33 14.445 63.045 15.63 62.79 16.53C63.555 17.64 63.72 18.645 63.72 19.38C63.72 19.845 63.645 20.22 63.48 20.37C63.375 20.445 63.255 20.49 63.105 20.49C62.94 20.49 62.76 20.49 62.52 20.475C62.73 20.85 62.835 21.405 62.85 21.795C63.165 21.81 63.48 21.795 63.72 21.765C64.02 21.72 64.275 21.63 64.47 21.45C64.905 21.135 65.07 20.475 65.07 19.56C65.07 19.38 65.07 19.185 65.04 18.99C65.19 19.305 65.34 19.695 65.385 19.935C65.385 19.905 65.385 19.875 65.4 19.86V19.935C65.535 19.8 65.94 19.695 66.225 19.695H66.435C66.015 21.825 65.19 23.355 63.96 24.24C64.275 24.45 64.77 25.02 64.965 25.35C65.64 24.84 66.225 24.135 66.705 23.22C67.665 24.75 69.105 25.08 71.16 25.08C72.165 25.08 73.275 25.05 74.175 24.99C74.25 24.555 74.445 23.82 74.64 23.46C73.635 23.58 72.195 23.625 71.22 23.625C69.42 23.625 68.055 23.385 67.29 21.84C67.635 20.88 67.875 19.74 68.04 18.465L67.44 18.195ZM71.685 20.28L72.315 19.32C71.91 19.02 71.19 18.675 70.56 18.375L69.915 19.185C70.515 19.5 71.25 19.98 71.655 20.28C70.995 20.415 70.38 20.52 69.855 20.61C69.9 20.145 69.915 19.68 69.915 19.275V18.285H72.465V20.13L71.685 20.28ZM73.785 17.28H68.625V19.26C68.625 20.235 68.565 21.48 67.86 22.425C68.16 22.56 68.76 22.95 68.985 23.175C69.42 22.59 69.66 21.84 69.78 21.075L70.08 21.915C70.815 21.69 71.61 21.435 72.465 21.18V22.02C72.465 22.155 72.42 22.2 72.27 22.2C72.12 22.2 71.625 22.2 71.19 22.185C71.325 22.5 71.49 22.935 71.535 23.265C72.33 23.265 72.9 23.265 73.275 23.07C73.68 22.89 73.785 22.605 73.785 22.02V17.28Z"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="89"
                height="34"
                rx="17"
                stroke="#FF6600"
              />
            </svg>
          </div>
          <!-- btn-unfollow -->
          <div class="btn-follow" v-else @click="following(userData.id)">
            <svg
              width="60"
              height="35"
              viewBox="0 0 60 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.61 13.365H19.815V15.3H17.61V13.365ZM21.315 21.75C20.805 21.885 20.295 22.005 19.785 22.14V19.95H21.36V18.405H19.785V16.8H21.42V11.865H16.095V16.8H18.225V22.515L17.46 22.68V17.91H16.035V22.995L15.345 23.145L15.75 24.825C17.37 24.39 19.515 23.835 21.495 23.28L21.315 21.75ZM23.61 16.035H27.06V17.25H23.61V16.035ZM27.06 13.44V14.595H23.61V13.44H27.06ZM28.335 18.93C27.9 19.41 27.24 19.995 26.625 20.46C26.385 19.935 26.205 19.38 26.04 18.795H28.695V11.91H21.9V22.665C21.9 23.355 21.51 23.76 21.21 23.955C21.465 24.27 21.84 24.96 21.96 25.35C22.32 25.125 22.875 24.9 25.83 24.15C25.77 23.775 25.74 23.04 25.755 22.53L23.61 22.995V18.795H24.57C25.245 21.705 26.355 24.015 28.44 25.26C28.695 24.765 29.205 24.06 29.565 23.715C28.665 23.265 27.915 22.575 27.345 21.735C27.99 21.3 28.77 20.715 29.445 20.19L28.335 18.93ZM37.545 13.875C37.335 13.26 36.885 12.3 36.495 11.55L35.16 11.955C35.52 12.705 35.97 13.695 36.165 14.355L37.545 13.875ZM39.765 15H40.815V15.825H38.97C39.255 15.525 39.54 15.21 39.78 14.85L39.765 15ZM37.44 18.195L37.185 18.24H36.75C37.08 17.475 37.425 16.485 37.71 15.69C37.935 15.945 38.16 16.23 38.265 16.425C38.445 16.29 38.61 16.155 38.775 16.005V16.8H44.25V15.825H42.345V15H43.905V14.025H40.275C40.38 13.83 40.47 13.635 40.56 13.425H44.37V12.285H40.98C41.07 12 41.145 11.715 41.205 11.43L39.885 11.235C39.81 11.595 39.72 11.94 39.6 12.285H37.59V13.425H39.105C38.805 13.98 38.43 14.46 38.01 14.865L37.005 14.595L36.78 14.7H34.92V16.215H36.18C35.895 17.055 35.595 17.91 35.445 18.15C35.31 18.405 35.16 18.525 34.995 18.6C34.89 17.925 34.62 17.19 34.095 16.38C34.47 15.195 34.905 13.635 35.235 12.39L34.26 11.835L34.035 11.88H31.005V25.26H32.415V13.47H33.54C33.33 14.445 33.045 15.63 32.79 16.53C33.555 17.64 33.72 18.645 33.72 19.38C33.72 19.845 33.645 20.22 33.48 20.37C33.375 20.445 33.255 20.49 33.105 20.49C32.94 20.49 32.76 20.49 32.52 20.475C32.73 20.85 32.835 21.405 32.85 21.795C33.165 21.81 33.48 21.795 33.72 21.765C34.02 21.72 34.275 21.63 34.47 21.45C34.905 21.135 35.07 20.475 35.07 19.56C35.07 19.38 35.07 19.185 35.04 18.99C35.19 19.305 35.34 19.695 35.385 19.935C35.385 19.905 35.385 19.875 35.4 19.86V19.935C35.535 19.8 35.94 19.695 36.225 19.695H36.435C36.015 21.825 35.19 23.355 33.96 24.24C34.275 24.45 34.77 25.02 34.965 25.35C35.64 24.84 36.225 24.135 36.705 23.22C37.665 24.75 39.105 25.08 41.16 25.08C42.165 25.08 43.275 25.05 44.175 24.99C44.25 24.555 44.445 23.82 44.64 23.46C43.635 23.58 42.195 23.625 41.22 23.625C39.42 23.625 38.055 23.385 37.29 21.84C37.635 20.88 37.875 19.74 38.04 18.465L37.44 18.195ZM41.685 20.28L42.315 19.32C41.91 19.02 41.19 18.675 40.56 18.375L39.915 19.185C40.515 19.5 41.25 19.98 41.655 20.28C40.995 20.415 40.38 20.52 39.855 20.61C39.9 20.145 39.915 19.68 39.915 19.275V18.285H42.465V20.13L41.685 20.28ZM43.785 17.28H38.625V19.26C38.625 20.235 38.565 21.48 37.86 22.425C38.16 22.56 38.76 22.95 38.985 23.175C39.42 22.59 39.66 21.84 39.78 21.075L40.08 21.915C40.815 21.69 41.61 21.435 42.465 21.18V22.02C42.465 22.155 42.42 22.2 42.27 22.2C42.12 22.2 41.625 22.2 41.19 22.185C41.325 22.5 41.49 22.935 41.535 23.265C42.33 23.265 42.9 23.265 43.275 23.07C43.68 22.89 43.785 22.605 43.785 22.02V17.28Z"
                fill="#FF6600"
              />
              <rect
                x="0.5"
                y="0.5"
                width="59"
                height="34"
                rx="17"
                stroke="#FF6600"
              />
            </svg>
          </div>
        </div>
        <!-- name & account -->
        <div class="name-account">
          <div class="name">{{ userData.name }}</div>
          <div class="account">@{{ userData.account }}</div>
        </div>
        <!-- info -->
        <div class="info">
          {{ userData.introduction }}
        </div>
        <!-- 跟隨中 & 跟隨者 -->
        <div class="followings-followers">
          <div class="followings">
            <div class="num">
              <router-link to="/user-followings">
                {{ followings.length }}位
              </router-link>
            </div>
            跟隨中
          </div>
          <div class="followers">
            <div class="num">
              <router-link to="/user-followers">
                {{ followers.length }}位
              </router-link>
            </div>
            跟隨者
          </div>
        </div>
        <!-- tabs -->
        <div class="user-tabs">
          <div
            class="tweets"
            :class="{ active: $route.name === 'other-tweets' }"
            @click.stop.prevent="tweets"
          >
            推文
          </div>
          <div
            class="repliers"
            :class="{ active: $route.name === 'other-replied' }"
            @click.stop.prevent="replied"
          >
            推文與回覆
          </div>
          <div
            class="liked"
            :class="{ active: $route.name === 'other-likes' }"
            @click.stop.prevent="likes"
          >
            喜歡的內容
          </div>
        </div>
        <!-- tabs content -->
        <router-view :initial-user="userData" />
      </div>
    </div>
    <Popular />
  </div>
</template>

<style lang="scss" scoped>
.show-user {
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  position: absolute;
  left: 27%;
  bottom: 0px;
  width: 42%;
  height: 100%;
  background-color: white;

  header {
    height: 55px;
    display: flex;
    font-family: "Noto Sans TC", sans-serif;
    font-style: normal;
    .icon-back {
      margin: 20px;
    }
    .name-tweets {
      margin: 6px 20px;
      .name {
        font-size: 19px;
        font-weight: 900;
        color: #1c1c1c;
      }
      .tweets {
        font-weight: 500;
        font-size: 13px;
        color: #657786;
      }
    }
  }

  .user-info {
    position: relative;
    font-family: "Noto Sans TC", sans-serif;
    font-style: normal;
    .background-cover {
      .cover {
        width: 100%;
        height: 200px;
        z-index: -1;
      }
    }

    .avatar-btn {
      display: flex;
      justify-content: space-between;
      max-height: 78px;
      .avatar {
        border: 4px solid #ffffff;
        position: relative;
        bottom: 64px;
        left: 15px;
        width: 140px;
        height: 140px;
        border-radius: 50%;
      }

      .btn-follow,
      .btn-unfollow {
        cursor: pointer;
      }
    }

    .name-account {
      position: absolute;
      margin: 5px 15px;
      .name {
        font-weight: 900;
        font-size: 19px;
        color: #1c1c1c;
      }
      .account {
        font-weight: 500;
        font-size: 15px;
        color: #657786;
      }
    }

    .info {
      position: relative;
      top: 51px;
      font-weight: normal;
      font-size: 14px;
      margin: 10px 15px;
    }

    .followings-followers {
      position: relative;
      top: 50px;
      font-weight: 500;
      font-size: 14px;
      display: flex;
      margin: 0px 15px;
      color: #657786;
      .followings,
      .followers {
        display: flex;
        margin-right: 20px;
      }
      .num {
        color: #000000;
      }

      a {
        text-decoration: none;
      }
    }
  }

  .user-tabs {
    border-bottom: 1px solid #e6ecf0;
    position: relative;
    top: 50px;
    display: flex;
    font-family: "Noto Sans TC", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #657786;
    .tweets,
    .repliers,
    .liked {
      width: 130px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .active {
      border-bottom: 2px solid #ff6600;
      color: #ff6600;
    }
  }
}
</style>

<script>
import Popular from "./../components/Popular.vue";
import Navbar from "./../components/Navbar.vue";
import { Toast } from "./../utils/helpers";
import userAPI from "./../api/userProfile";
import popularAPI from "./../api/user";
import followerships from "./../api/followerships";

const getUserId = () => localStorage.getItem("user");

export default {
  name: "OtherUser",
  components: {
    Popular,
    Navbar,
  },
  data() {
    return {
      userData: {},
      tweetsNum: "",
      followings: [],
      followers: [],
      isLoading: true,
      currentUserId: getUserId(),
      currentUserFollowings: [],
    };
  },
  methods: {
    async fetchUser(userid) {
      try {
        const response = await userAPI.getOtherUser(userid);

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.userData = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    // tweets num
    async fetchApiTweets(userid) {
      try {
        const response = await userAPI.getTweets(userid);

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.tweetsNum = data.length;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    // followingsNum
    async fetchFollowings(userid) {
      try {
        const response = await userAPI.getFollowings(userid);

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.followings = data;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    // followersNum
    async fetchFollowers(userid) {
      try {
        const response = await userAPI.getFollowers(userid);

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.followers = data;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    async following(followerId) {
      try {
        const response = await followerships.following(followerId);
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.fetchPopular();
        this.fetchFollowings(followerId);
        this.fetchFollowers(followerId);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法追隨",
        });
      }
    },
    async unfollowing(followerId) {
      try {
        const response = await followerships.unfollowing(followerId);
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.fetchPopular();
        this.fetchFollowings(followerId);
        this.fetchFollowers(followerId);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法取消追隨",
        });
      }
    },
    // 抓自己的followings比對
    async fetchPopular() {
      try {
        const response = await popularAPI.getPopular(getUserId());
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.currentUserFollowings = data.userFollowingList;
        this.currentUserFollowings = this.currentUserFollowings.map(
          (following) => {
            return following.followingId;
          }
        );
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    // change children route
    tweets() {
      this.$router.push({ name: "other-tweets" });
    },
    replied() {
      this.$router.push({ name: "other-replied" });
    },
    likes() {
      this.$router.push({ name: "other-likes" });
    },
  },
  created() {
    const userid = Number(this.$route.params.id);
    this.fetchUser(userid);
    this.fetchApiTweets(userid);
    this.fetchFollowings(userid);
    this.fetchFollowers(userid);
    this.fetchPopular();
  },
  beforeRouteUpdate(to, from, next) {
    const id = to.params.id;
    this.fetchUser(id);
    this.fetchApiTweets(id);
    this.fetchFollowings(id);
    this.fetchFollowers(id);
    next();
  },
};
</script>
