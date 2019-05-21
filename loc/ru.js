module.exports = {
  _: {
    storage_is_encrypted: 'Твоё хранилище зашифровано. Введи пароль для расшифровки',
    enter_password: 'Введи пароль',
    bad_password: 'Неверный пароль, попробуй еще раз',
    never: 'Никогда',
    continue: 'Продолжить',
    ok: 'OK',
  },
  wallets: {
    options: 'Настройки',
    select_wallet: 'Выбрать кошелек',
    createBitcoinWallet: 'Чтобы воспользоватья кошельком Lightning, нужно сначала пополнить его с помощью кошелька Bitcoin. Продолжить?',

    list: {
      app_name: 'BlueWallet',
      title: 'Кошельки',
      header: 'Кошелек - это секретный (приватный) ключ и соответствующий ему адрес на который можно получать Bitcoin',
      add: 'Добавить Кошелек',
      create_a_wallet: 'Создать кошелек',
      create_a_wallet1: 'Это бесплатно и ты можешь создать',
      create_a_wallet2: 'неограниченное количество',
      latest_transaction: 'Последняя транзакция',
      empty_txs1: 'Список транзакций пока пуст',
      empty_txs2: ' ',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Купить Bitcoin',
    },
    reorder: {
      title: 'Отсортировать кошельки',
    },
    add: {
      title: 'Добавить кошелек',
      description:
        'Ты можешь отсканировать QR код (в формате WIF - Wallet Import Format) или создать новый кошелек. Segwit поддерживается по умолчанию.',
      scan: 'Отсканировать',
      create: 'Создать',
      label_new_segwit: 'Новый SegWit',
      label_new_lightning: 'Новый Lightning',
      wallet_name: 'Имя кошелька',
      wallet_type: 'Тип кошелька',
      or: 'или',
      import_wallet: 'Импортировать кошелек',
      imported: 'Кошелек импортирован',
      coming_soon: 'Скоро будет',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Информация о кошельке',
      address: 'Адрес',
      type: 'Тип',
      label: 'Метка',
      delete: 'Удалить',
      save: 'Сохранить',
      are_you_sure: 'Точно удалить?',
      yes_delete: 'Да, удалить',
      destination: 'Назначение',
      description: 'Описание',
      no_cancel: 'Нет, отмена',
      delete_this_wallet: 'Удалить этот кошелек',
      export_backup: 'Экспорт / резервная копия',
      buy_bitcoin: 'Купить Bitcoin',
      show_xpub: 'Показать XPUB',
    },
    export: {
      title: 'Экспорт Кошелька',
    },
    xpub: {
      title: 'XPUB кошелька',
      copiedToClipboard: 'Скопировано',
    },
    import: {
      title: 'Импорт',
      explanation: 'Напиши тут свою мнемоническую фразу, приватный ключ, WIF - что угодно! BlueWallet постарается угадать верный формат',
      imported: 'Импорт завершен',
      error: 'Не удалось импортировать',
      success: 'Успех',
      do_import: 'Импортировать',
      scan_qr: 'или отсканировать QR код?',
    },
    scanQrWif: {
      go_back: 'Назад',
      cancel: 'Отмена',
      decoding: 'Расшивровываю',
      input_password: 'Введи пароль',
      password_explain: 'Приватный ключ зашифрован по стандарту BIP38',
      bad_password: 'Неверный пароль',
      wallet_already_exists: 'Такой кошелек уже существует',
      bad_wif: 'Некорректный WIF',
      imported_wif: 'Импортирован WIF ',
      with_address: ' с адресом ',
      imported_segwit: 'Импортированый SegWit',
      imported_legacy: 'Импортированый Legacy',
      imported_watchonly: 'Импортированый Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Транзакции',
      title: 'Мои транзакции',
      description: 'Список входящих или исходящих транзакций ваших кошельков',
      conf: 'подтв.',
    },
    details: {
      title: 'Детали транзакци',
      from: 'От',
      to: 'Кому',
      copy: 'копировать',
      transaction_details: 'Детали транзакции',
      show_in_block_explorer: 'Показать транзакцию в блокчейне',
    },
  },
  send: {
    header: 'Отправить',
    confirm: {
      header: 'Подтвердить',
      sendNow: 'Отправить',
    },
    success: {
      done: 'Готово',
    },
    details: {
      title: 'Создать Транзакцию',
      amount_field_is_not_valid: 'Введенная сумма неверна',
      fee_field_is_not_valid: 'Введенная комиссия неверна',
      address_field_is_not_valid: 'Введенный адрес неверный',
      receiver_placeholder: 'Адрес получателя',
      amount_placeholder: 'сколько отправить (в BTC)',
      fee_placeholder: 'плюс комиссия за перевод (в BTC)',
      note_placeholder: 'примечание платежа',
      create_tx_error: 'Ошибка при создании транзакции. Пожалуйста, проверь правильность адреса.',
      cancel: 'Отмена',
      scan: 'Отсканировать QR',
      create: 'Создать',
      send: 'Отправить',
      address: 'Адрес',
      total_exceeds_balance: 'Общая сумма превышает баланс.',
      remaining_balance: 'Остаток баланса',
    },
    create: {
      title: 'Создать Транзакцию',
      details: 'Детали',
      error: 'Ошибка при создании транзакции. Неправильный адрес назначения или недостаточно средств?',
      go_back: 'Назад',
      this_is_hex: 'Это данные транзакции. Транзакция подписана и готова быть транслирована в сеть. Продолжить?',
      to: 'Куда',
      amount: 'Сколько',
      fee: 'Комиссия',
      tx_size: 'Размер',
      satoshi_per_byte: 'Сатоши на байт',
      memo: 'Примечание',
      broadcast: 'Отправить',
      not_enough_fee: 'Слишком маленькая комиссия. Увеличь комиссию',
    },
  },
  buyBitcoin: {
    header: 'Купить Bitcoin',
    tap_your_address: 'Нажми на адрес, чтобы скопировать его:',
    copied: 'Скопировано',
  },
  receive: {
    header: 'Получить',
    details: {
      title: 'Покажи этот адрес плательщику',
      share: 'Отправить',
      copiedToClipboard: 'Скопировано',
      label: 'Описание',
      create: 'Создать',
      setAmount: 'Получить сумму',
    },
  },
  settings: {
    tabBarLabel: 'Настройки',
    header: 'Настройки',
    plausible_deniability: 'Правдоподобная имитация...',
    storage_not_encrypted: 'Хранилище: не зашифровано',
    storage_encrypted: 'Хранилище: зашифровано',
    password: 'Пароль',
    password_explain: 'Придумай пароль для расшифровки хранилища',
    retype_password: 'Набери пароль повторно',
    passwords_do_not_match: 'Пароли не совпадают',
    encrypt_storage: 'Зашифровать хранилище',
    lightning_settings: 'Настройки Lightning',
    lightning_settings_explain:
      'Чтобы подключиться к своему узлу LND, пожалуйста, установи LndHub' +
      ' и добавь его URL в настройки. Оставь поле пустым, чтобы использоавать стандартный ' +
      'LndHub\n (lndhub.io)',
    save: 'Сохранить',
    about: 'О программе',
    language: 'Язык',
    currency: 'Валюта',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: 'Правдоподобная имитация',
    help:
      'При определенных обстоятельствах тебя могут вынудить раскрыть пароль. ' +
      'Чтобы сохранить свой Bitcoin в безопасности, BlueWallet может создать ' +
      'еще одно зашифрованое хранилище, с другим паролем. В случае шантажа ' +
      'ты можешь раскрыть третьим лицам этот пароль. Если ввести этот пароль в ' +
      "BlueWallet, разблокируется 'фальшивое' хранилище. Это будет выглядеть " +
      'правдоподобно для третьих лиц, но при этом сохранит ваше основное хранилище ' +
      'с Bitcoin в безопасности.',
    help2:
      'Новое хранилище будет полностью функциональным и ты даже можешь хранить на нем немного Bitcoin, ' +
      'чтобы это выглядело более правдоподобно.',
    create_fake_storage: 'Создать фальшивое хранилище',
    go_back: 'Назад',
    create_password: 'Придумай пароль',
    create_password_explanation: 'Пароль для фальшивого хранилища не должен быть таким же как основной пароль',
    password_should_not_match: 'Пароль для фальшивого хранилища не должен быть таким же как основной пароль',
    retype_password: 'Набери пароль повторно',
    passwords_do_not_match: 'Пароли не совпадают, попробуй еще раз',
    success: 'Готово',
  },
  lnd: {
    title: 'Мои средства',
    choose_source_wallet: 'Выбери с какого кошелька',
    refill_lnd_balance: 'Пополнить баланс Lightning кошелька',
    refill: 'Пополнить',
    withdraw: 'Вывести',
    expired: 'Истекший',
    placeholder: 'Invoice',
    sameWalletAsInvoiceError: 'Ты не можешь оплатить счет тем же кошельком, который ты использовал для его создания.',
  },
  pleasebackup: {
    title: 'Backup',
    success: 'Success, your wallet is now created!',
    text:
      "Please take a moment to write down this mnemonic sentence on paper. It’s your backup that you can use to restore your wallet.",
    
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'This invoice was not paid for and has expired',
    has_been_paid: 'This invoice has been paid for',
    please_pay: 'Please pay',
    sats: 'sats',
    for: 'For:',
    additional_info: 'Additional Information',
    open_direct_channel: 'Open direct channel with this node:',
  },
};
