export default {
    globals: {
      account: 'Account',
      amount: 'Amount',
      cancel: 'Cancel',
      close: 'Close',
      comingSoonFeature: 'The feature is coming soon',
      confirm: 'Confirm',
      continue: 'Continue',
      delete: 'Delete',
      done: 'Done',
      edit: 'Edit',
      error: 'Error',
      fromFavorites: 'From Favorites',
      generate: 'Generate',
      linkingError: 'The URL is invalid. Please try later',
      linkingNoApplication: 'There are no applications installed to open this link',
      loading: 'Loading...',
      no: 'No',
      ok: 'OK',
      proceed: 'Proceed',
      retry: 'Retry',
      save: 'Save',
      saveBeneficiary: 'Save Beneficiary',
      search: 'Search',
      selectFromBeneficiary: 'Select from beneficiary',
      sessionExpiredMessage: 'Session has expired',
      submit: 'Submit',
      success: 'Successful!',
      total: 'Total',
      toFavorites: 'To Favorites',
      tryAgain: 'Try Again',
      warning: 'Warning',
      yes: 'Yes',
      airtime: 'Airtime',
      billsPayment: 'Bill Payment',
      airtimePayment: 'Airtime Purchase',
      dataPayment: 'Data Purchase',
      fundsTransfer: 'Fund Transfer',
      hashBalance: '∗∗∗∗',
    },
    validation: {
      accountExists: 'Account number already exists',
      accountNotFound: 'Account not found. Enter a correct account',
      usernameNotAvailable: 'This username already exists',
      refNotFound: "Can't get data for transfer",
      exactLengthDigits: 'Should contain {{length}} digits',
      invalidPin: 'Invalid PIN',
      minAge: 'You should be {{minAge}} to register',
      minAmount: 'Min amount is {{minAmount}}',
      maxAmount: 'Max amount is {{maxAmount}}',
      amountLimits: 'Incorrect amount. Amount should be from ₦{{minAmount}} to ₦{{maxAmount}}',
      amountAccountBalance: 'Amount is greater than account balance',
      passwordDontMatch: 'Password does not match!',
      pinDontMatch: "PIN doesn't match!",
      samePin: 'New PIN cannot be the same as the current one',
      usernameAllowedCharacters: 'Can only contain letters (a-z), numbers (0-9), and periods (.)',
      invalidCharacters: 'Invalid characters not allowed',
      subsequentPeriods: 'Should not contain more than one period (.) in a row',
      lessThan: 'Can not be greater than {{field}}',
      description: 'Should contain at least 3 characters or leave field empty',
      nicknameAllowedCharacters: 'Must begin with a letter and should not contain special characters',
    },
    caseReturn: {
      bills: 'BillsPayment',
      airtime: 'Airtime',
      transfer: 'Transfer',
    },
    forms: {
      phoneNumber: {
        label: 'Phone Number',
        placeholder: 'Enter phone number',
        searchPlaceholder: 'Search country',
        codeModalTitle: 'Select Calling Code',
      },
      biller: {
        label: 'Biller',
        placeholder: 'Select Biller',
      },
      category: {
        label: 'Category',
        placeholder: 'Select Category',
      },
      product: {
        label: 'Product',
        placeholder: 'Select Package',
        empty: 'Please select a biller first',
      },
      customerId: {
        label: "Customer's ID",
        placeholder: 'Enter customer ID',
      },
      accountNumber: {
        label: 'Account Number',
        placeholder: 'Enter account number',
      },
      accountName: {
        label: 'Account Name',
      },
      description: {
        label: 'Description (optional)',
        placeholder: 'Enter short desciption',
        info: 'Enter 3 characters at least ',
      },
      fromAccount: {
        title: 'From',
        info: 'Account',
      },
      toAccount: {
        label: 'To',
        placeholder: 'Select account from options',
        info: 'account',
      },
      bank: {
        label: 'Bank',
        title: 'Select Bank',
        placeholder: 'Select Bank',
      },
      password: {
        label: 'Password',
        placeholder: 'Enter your password',
      },
      search: {
        placeholder: 'Search',
      },
      error: {
        title: 'Error',
        message: 'Please fill all required fields',
      },
      network: {
        label: 'Network',
        placeholder: 'Select Service Provider',
      },
      dataPlan: {
        label: 'Data Plan',
        placeholder: 'Select Package',
      },
      customerID: {
        label: 'Customer ID',
        placeholder: 'Enter Customer ID',
      },
      nickname: {
        label: 'Nickname',
        labelOptional: 'Nickname (Optional)',
        placeholder: 'Enter nickname for beneficiary',
      },
      fullname: {
        label: 'Full name',
      },
      email: {
        label: 'Email',
        placeholder: 'Enter your email address',
      },
      selectAmountLabel: 'Select Amount',
      selectBeneficiary: 'Select Beneficiary',
      maximumLimit: 'Maximum Limit: {{limit}}',
    },
    onboarding: {
      screen1: {
        title: 'Money Transfer Just Got Better',
        text: 'Enjoy a seamless way to send and receive money across banks',
      },
      screen2: {
        title: 'Smarter Way to Pay Bills',
        text: 'Embrace an effortless and hassle-free way to pay all your bills',
      },
      buttons: {
        register: 'Register',
        login: 'Login',
      },
      linkText: {
        link: 'Open Account',
        textContent: "Don't have a Thrive Account?",
      },
    },
    bankSelection: {
      header: {
        title: 'Start by selecting your bank',
        text: 'Select the microfinance bank you want to register',
      },
      searchPlaceholder: 'Search by bank name',
    },
    registration: {
      successSubtitle: 'Your profile has been created successfully!',
      register: {
        header: {
          title: 'Register for Mobile Banking',
          text: 'Enter your account number and phone number',
        },
        input: {
          account: 'Account Number',
          accountPlaceholder: 'Enter your account number',
          phone: 'Phone Number',
          phonePlaceholder: 'Enter your phone number',
          phoneHint: 'Enter the phone number attached  to your account',
        },
        linkQuestion: {
          haveAccount: {
            textContent: 'Already have an account?',
            linkText: 'Login',
          },
        },
        termsAndPrivacyLink: {
          termsAndConditions: 'Terms & Condition ',
          privacyPolicy: 'Privacy Policy',
          agree: " I agree to Thrive's ",
          and: 'and ',
        },
      },
      pinTransaction: {
        setUp: {
          header: {
            title: 'Create Transaction PIN',
            text: 'Set your PIN for making transactions',
            description: 'Set Transaction PIN',
          },
        },
        confirmation: {
          header: {
            title: 'Create Transaction PIN',
            text: 'Set your PIN for making transactions',
            description: 'Confirm Transaction PIN',
          },
          error: {
            title: 'Error',
            text: 'Pins do not match',
            button: 'OK',
          },
        },
      },
    },
    setupPassword: {
      header: {
        title: 'Forgot Password',
        text: 'Enter your new password to reset password',
      },
      confirmPasswordLabel: 'Confirm Password',
      confirmPasswordPlaceholder: 'Confirm your password',
      validationRules: {
        rule1: '1 lowercase letter',
        rule2: '1 uppercase letter',
        rule3: '1 special character',
        rule4: '8 characters',
        rule5: '1 number',
      },
      modalSuccess: {
        text: 'Your password have been reset\nsuccessfully!',
        button: 'Login to Dashboard',
      },
    },
    openAccount: {
      header: 'Open a Thrive Account',
      subheader: 'Enter your BVN and Date of Birth to proceed',
      bvnLabel: 'Bank Verification Number',
      bvnPlaceHolder: 'Enter your BVN',
      bvnHint: 'Dial *564*0# to check your BVN',
      dobLabel: 'Date of Birth',
      dobPlaceholder: 'Enter your date of birth',
      personalDetails: {
        title: 'Personal Details',
        text: 'Kindly review your biodata to proceed',
        firstName: 'First Name',
        lastName: 'Last Name',
        middleName: 'Middle Name',
        gender: 'Gender',
        dob: 'Date of Birth',
      },
      contactDetails: {
        title: 'Contact Details',
        text: 'Enter your email and home address',
        emailLabel: 'Email',
        emailPlaceholder: 'Enter your email address',
        addressLabel: 'Address',
        addressPlaceholder: 'Enter your residential address',
        landmarkLabel: 'Nearest Landmark/Bus-stop',
        landmarkPlaceholder: 'Enter your nearest landmark',
        stateLabel: 'State',
        statePlaceholder: 'Select your state of residence',
        cityLabel: 'City',
        cityPlaceholder: 'Select your city',
        lgaLabel: 'Local Governement Area (LGA)',
        lgaPlaceholder: 'Select your local government area',
        lgaEmpty: 'Please select your state first',
      },
      uploadDocuments: {
        title: 'Upload Documents',
        text: 'Kindly upload your ID and signature',
        uploadId: 'Upload ID',
        uploadSignature: 'Upload Signature',
        meansOfIdLabel: 'Means of Identification',
        meansOfIdPlaceholder: 'Select your means of identification',
        nin: 'NIN',
        votersCard: 'Voters card',
        driversLicense: 'Drivers License',
        passport: 'Passport',
        modal: {
          text: 'Choose preferred method\nto upload Photo',
          camera: 'Camera',
          gallery: 'Gallery',
        },
      },
      successModal: {
        accountText: 'Account opened successfully and\ndetails sent to your email',
        profileText: 'Profile created successfully',
      },
      transactionPin: 'Set your PIN for making transactions',
      createProfile: 'Create Your Profile',
    },
    createUsername: {
      header: {
        title: 'Create Username',
        text: 'Create your username and password',
      },
      confirmUsernameLabel: 'Username',
      confirmUsernamePlaceholder: 'Enter your username',
    },
    login: {
      header: {
        firstLoginTitle: 'Login to your account',
        subsequentLoginTitle: 'Welcome Back {{savedFirstname}}!',
        firstLoginText: 'Welcome!',
        subsequentLoginText: 'Login to your account',
      },
      inputLabel: {
        username: 'Username',
        password: 'Password',
      },
      button: 'Login',
      switchAccount: {
        linkText: 'Switch Account',
        textContent: 'Not {{user}}?',
      },
      linkQuestion: {
        forgotPassword: {
          linkText: 'Forgot Password',
        },
        userMigration: {
          linkText: 'Click Here',
          textContent: 'Have an existing Thrive MFB profile?',
        },
      },
      inputPlaceholder: {
        username: 'Enter your username',
        password: 'Enter your password',
      },
      rememberMe: 'Remember Me',
      quickTransactions: {
        title: 'Quick Transactions',
        text: 'Click to see all quick transactions',
      },
      biometricsModal: {
        title: 'Enable Biometrics',
        text: 'Do you want to enable biometrics for\nsubsequent login?',
        yes: 'Yes, Enable',
        no: 'No, Skip',
      },
      deviceDetected: {
        title: 'Device Detected',
        text: 'New device detected but {{maxDevices}} devices linked already',
        message:
          "We noticed you're signing in from a new device. You have exceeded the allowed number of linked device to an account. Please review and unlink a device to proceed.",
        buttonText: 'Review Linked Devices',
      },
      userMigration: {
        title: 'Existing User’s Migration',
        text: 'Migrate to continue to login',
        confirmation: {
          title: 'Confirm Details',
          text: 'Kindly confirm your account details',
          yes: 'Yes, confirmed',
          no: 'No, this is not me',
        },
        createPassword: {
          title: 'Create Password',
          text: 'Kindly proceed to create your password',
        },
      },
    },
    forgotPassword: {
      header: {
        title: 'Forgot Password',
        text: 'Enter your account number to reset password',
        securityQuestions: 'Select one of your security questions to proceed',
      },
      popupText: 'New password has been created successfully',
      securityQuestion: {
        questionLabel: 'Security Question',
        questionPlaceholder: 'Select your security question',
        answerLabel: 'Answer',
        answerPlaceholder: 'Enter your answer to security question',
        modalHeader: 'Security Questions',
      },
    },
  
    securityQuestions: {
      header: {
        title: 'Select Security Question',
        text: 'Secure your profile with security questions',
      },
      popupText: 'New password has been created successfully',
      questionLabel: 'Question {{num}}',
      questionPlaceholder: 'Select your security question',
      answerLabel: 'Answer {{num}}',
      answerPlaceholder: 'Enter your answer to security question',
      modalHeader: 'Security Questions',
      question1: 'In what city were you born?',
      question2: 'What is the name of your favourite pet?',
      question3: 'What is your mother’s maiden name?',
      question4: 'What high school did you attend?',
      question5: 'What was the name of your elementary school?',
      question6: 'What was the make of your first car?',
      question7: 'What was your favourite food as a child?',
      question8: 'Where did you meet your spouse?',
      question9: 'What year was your father (or mother) born?',
      question10: 'What is your nickname?',
    },
  
    dashboard: {
      categories: {
        transfer: 'Send Money',
        airtime: 'Airtime',
        data: 'Data',
        bills: 'Pay Bills',
        history: 'Transaction History',
        accounts: 'My accounts',
      },
      logout: 'Are you sure you want to logout?',
      hello: 'Hello,',
      actionsHeader: 'Do more with Thrive MFB',
      biometricsPinErrorText:
        'Biometric Authentication is disabled because PIN can not be verified. You can enable it in settings',
    },
    welcomeModal: {
      title: 'Welcome, {{firstName}}',
      text: 'You can now use your ThriveMFB account to carry out transactions on this device.',
      buttonText: 'Get Started',
    },
    accountSelector: {
      modalTitleAccount: 'Select Account',
      modalSearchPlaceholderAccount: 'Search Account',
      modalTitleBeneficiary: 'Select Beneficiary',
      modalSearchPlaceholderBeneficiary: 'Search Beneficiary',
      balanceLabelText: 'Balance',
      accountNumberInput: 'Enter account number',
      selectorPlaceholder: 'Select account from options',
    },
  
    billsPayment: {
      title: 'Pay Bills',
      screenTitle: 'Bills Payement',
      header: {
        title: 'Choose Category',
        text: 'Select a quick transaction to carry out',
      },
      searchPlaceholder: 'Search Category',
      menuItems: {
        cableTv: 'Purchase cable subscriptions',
        lotteryBetting: 'Purchase betting tickets',
        utility: 'Pay for water and other utilities',
        education: 'Pay for fees and education results',
        insurance: 'Pay for your insurance',
        transport: 'Pay for transport',
        airline: 'Pay for flight tickets and travels',
        internet: 'Pay for your internet services',
        default: 'Pay for {{name}}',
      },
      successText: 'You just bought {{biller}} - {{package}} package for {{customerId}}.',
      failedTitle: 'Bill Payment Failed',
    },
  
    transferOverview: {
      screenTitle: 'Send Money',
      title: 'Choose where to send money to',
      text: 'Select your preference ',
      menuItems: {
        ownAccount: {
          title: 'Own Account',
          text: 'Send money between your own accounts',
        },
        sameBank: {
          title: 'Thrive MFB Account',
          text: 'Send money to other Thrive MFB users',
        },
        otherBank: {
          title: 'Other Banks',
          text: 'Send money to other banks account users',
        },
      },
    },
    pinDescription: {
      title: 'Enter Transaction PIN',
      text: 'Input your transaction PIN to continue',
    },
    transfers: {
      ownAccountSetupTitle: 'Own Account',
      sameBankSetupTitle: 'Thrive MFB Transfer',
      otherBankSetupTitle: 'Other Bank Transfer',
      summaryTitle: 'Confirm Transaction',
      toAccountNumber: 'To',
      fromAccountNumber: 'Account Number',
      narration: 'Description',
      bankName: 'Bank Name',
      fee: 'Transaction Fee',
      accountNotFound: 'Account not found. Enter a correct account',
      successTitle: 'Transfer Successful',
      failedTitle: 'Transfer Failed',
      successSubtitleCurrent: 'Your transfer to {{name}} was completed',
      failedSubtitleCurrent: 'Your transfer to {{name}} has failed',
    },
  
    data: {
      screenTitle: 'Data',
      title: 'Select Package',
      label: 'Packages',
      placeholder: 'Select package',
      successTitle: 'Purchase Successful',
      successText: 'You just bought {{network}} - {{plan}} data package for {{phone}}',
      dataPlanModalTitle: 'Select Plan',
      failedTitle: 'Data Purchase Failed',
    },
    airtime: {
      successTitle: 'Purchase Successful',
      failedTitle: 'Airtime Purchase Failed',
      successText: 'You just bought airtime of {{amount}} for {{network}}-\n0{{phone}}',
    },
    setup: {
      title: 'Airtime & Data',
      selectContact: 'Select from contact',
    },
    summary: {
      title: 'Confirm Transaction',
      from: 'From',
      recipient: 'Recipient',
      network: 'Network',
      package: 'Package',
      fee: 'Transaction Fee',
      accountType: '{{type}} Account',
    },
    status: {
      openReceipt: 'Open Receipt',
      shareReceipt: 'Share Receipt',
      addBeneficiary: 'Add as\nBeneficiary',
      beneficiaryAdded: 'Saved as Beneficiary',
      downloadReceipt: 'Download Receipt',
      receiptDownloadSuccess: 'Receipt downloaded',
    },
    modalHeader: {
      network: 'Select Service Provider',
      dataPlan: 'Select Data Plan',
    },
    pinModal: {
      headerTitle: 'Verification',
      biometricsPrompt: 'Do You Want to Set Up Biometrics for Transaction Pin?',
    },
    errorLogger: {
      error: 'Error',
      defaultError: 'Something went wrong. Please try again later',
      modalTitle: 'Request Error',
      sameAccountError: "Source account can't be the same as destination account",
    },
    transactionHistory: {
      title: 'Transaction History',
      noHistory: 'No transaction history',
  
      date: {
        start: 'Start date',
        end: 'End date',
        placeholder: 'dd-mm-yy',
      },
    },
    otpVerification: {
      title: 'OTP Verification',
      text: 'Enter the OTP sent to {{phoneNumber}}',
      bodyText: 'Enter OTP',
      linkQuestion: {
        textContent: "Didn't get OTP?",
        linkText: 'Send another',
      },
    },
    profile: {
      overview: {
        title: 'Profile',
        changePin: { title: 'Change PIN', text: 'Manage your Transaction PIN' },
        forgotPin: { title: 'Forgot PIN', text: 'Manage and reset your PIN' },
        changePassword: { title: 'Change Password', text: 'Manage your Password' },
        securityQuestions: {
          title: 'Reset Security Questions',
          text: 'Manage your Security Questions',
        },
        biometric: { title: 'Setup Biometric ID', text: 'Manage your biometrics' },
        deleteProfile: { title: 'Delete Profile', text: 'Permanently delete your profile' },
        logout: { title: 'Logout' },
      },
      selectSecurityQuestionText: 'Select one of your security questions to proceed',
      changePin: {
        title: 'Change PIN',
        oldPin: 'Current PIN',
        newPin: 'New PIN',
        confirmNewPin: 'Confirm PIN',
        descriptionText: 'Kindly provide your current PIN to create a new one.',
        success: {
          title: 'PIN Set!',
          text: 'Your PIN has been set successfully',
        },
      },
      changePassword: {
        title: 'Change Password',
        text: 'Kindly provide your current password to create a new one.',
        currentPasswordLabel: 'Current Password',
        newPasswordLabel: 'New Password',
        confirmPasswordLabel: 'Confirm Password',
        placeholderCurrentPassword: 'Enter current Password',
        placeholderNewPassword: 'Enter new password',
        placeholderConfirmPassword: 'Confirm new password',
        success: {
          title: 'Password Set!',
          text: 'Your password has been set successfully',
        },
        unsuccess: {
          title: 'Password Set!',
          text: 'Your password change was unsuccessful. Please try again.',
        },
      },
      forgotPin: {
        title: 'Forgot PIN',
        text: 'Kindly set your PIN to create a new one',
      },
      securityQuestions: {
        title: 'Reset Security Questions',
        text: 'You can choose which security question to reset',
        success: {
          title: 'Security Question Reset!',
          text: 'Your security question has been reset\nsuccessfully',
        },
      },
      biometrics: {
        title: 'Set Up Biometrics',
        loginTitle: 'Enable Biometrics for Login',
        loginSubtitle: 'Turn on biometrics for login',
        transactionTitle: 'Enable Biometrics for Transaction',
        transactionSubtitle: 'Turn on biometrics for transaction',
      },
      deleteProfile: {
        title: 'Delete Profile',
        text: 'Kindly enter reason for deleting profile',
        modal: {
          title: 'Delete my Profile',
          text: 'Are you sure you want to permanently\ndelete your profile?',
          yes: 'Yes, Delete',
          no: 'No, Cancel',
        },
        reasonInputLabel: 'Reason for Deleting Profile',
        reasonInputPlaceholder: 'Enter your reason',
        success: {
          title: 'Profile Deleted',
          text: 'You have successfully deleted your profile. Now you will be redirected to registration screen.',
        },
        unsuccess: {
          title: 'Profile Deletion Unsuccessful',
          text: 'Your profile deletion was unsuccessful. Please try again.',
        },
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
    },
    beneficiaryPhoto: {
      editorMenu: {
        take: 'Take a Photo',
        upload: 'Upload from Gallery',
        delete: 'Delete Photo',
      },
      edit: 'Edit Photo',
      add: 'Add Photo',
    },
    photoManager: {
      noPermissionsError: {
        title: 'Insufficient Permissions',
        text: 'Please grant this app permissions to access camera/gallery',
      },
      deleteModal: {
        title: 'Delete Photo',
        text: 'Are you sure you want to delete the photo?',
        deleteButton: 'Delete Photo',
      },
    },
    beneficiaryManagement: {
      title: 'Beneficiary Management',
      transferListEmpty: 'No transfer beneficiaries',
      airtimeListEmpty: 'No airtime and data beneficiaries',
      billsListEmpty: 'No bills beneficiaries',
      sendAirtimeTitle: 'Send Airtime to Beneficiary',
      sendDataTitle: 'Send Data to Beneficiary',
      transferTitle: 'Transfer to Beneficiary',
      billsTitle: 'Pay Bills for Beneficiary',
      actions: {
        title: 'More action',
        edit: {
          title: 'Edit',
          text: 'Edit name/nickname of beneficiary',
        },
        transfer: {
          title: 'Transfer',
          text: 'Send money to this beneficiary',
        },
        delete: {
          title: 'Delete',
          text: 'Delete this beneficiary from your list',
        },
        airtime: {
          title: 'Send Airtime',
          text: 'Send airtime to this beneficiary',
        },
        data: {
          title: 'Send Data',
          text: 'Send data to this beneficiary',
        },
        bills: {
          title: 'Pay Bills',
          text: 'Pay bills to this beneficiary',
        },
      },
      deletion: {
        title: 'Delete this Beneficiary',
        alert: 'Are you sure you want to delete this\nbeneficiary from your list?',
        yes: 'Yes, Delete',
        no: 'No, Cancel',
        success: {
          title: 'Successful!',
          text: '{{name}} has been removed\nfrom your beneficiaries',
        },
        unsuccess: {
          title: 'Beneficiary Deletion Unsuccessful',
          text: 'Your beneficiary deletion was unsuccessful. Please try again.',
        },
      },
      addEdit: {
        addTitle: 'Add Beneficiary',
        editTitle: 'Edit Beneficiary',
        addSuccessText: '{{name}} has been added to your\nbeneficiaries',
        editSuccessText: 'Your changes have been saved\nsuccessfully',
        editButton: 'Save Changes',
        pinText: 'Enter PIN to add {{name}} as a beneficiary ',
      },
    },
    contactPreview: {
      title: 'Select Contact',
      search: 'Search recipient',
    },
    beneficiaryPreview: {
      title: 'Beneficiary Preview',
      buyAirtime: 'Buy Airtime',
      buyData: 'Buy Data',
      newTransfer: 'New Transfer',
      payBill: 'Pay Bill',
      delete: 'Delete Beneficiary',
    },
    addEditBeneficiary: {
      beneficiaryName: {
        label: 'Beneficiary Name',
        placeholder: 'Enter Beneficiary Name',
      },
      add: {
        screenHeader: 'Add New Beneficiary',
        success: {
          title: 'Beneficiary Adding Successful',
          text: 'You have successfully added beneficiary',
        },
        unsuccess: {
          title: 'Beneficiary Adding Unsuccessful',
          text: 'Your beneficiary adding was unsuccessful. Please try again.',
        },
        submitButton: 'Save Beneficiary',
      },
      edit: {
        screenHeader: 'Edit Beneficiary',
        success: {
          title: 'Beneficiary Update Successful',
          text: 'You have successfully updated beneficiary',
        },
        unsuccess: {
          title: 'Beneficiary Update Unsuccessful',
          text: 'Your beneficiary update was unsuccessful. Please try again.',
        },
        submitButton: 'Save Changes',
        confirmationModal: {
          title: 'Discard Changes',
          text: 'Are you sure you want to discard changes?',
          confirmButton: 'Discard Changes',
        },
      },
      bills: {
        userId: {
          label: "Beneficiary's User ID",
          placeholder: "Enter Beneficiary's User ID",
        },
        billerCategory: {
          label: 'Biller Category',
          placeholder: 'Select Biller Category',
        },
        selectedBiller: {
          label: 'Service Provider',
          placeholder: 'Select Service Provider',
        },
      },
    },
    termsAndPrivacy: {
      terms: 'Terms and Conditions',
      privacy: 'Privacy Policy',
    },
    androidPermissions: {
      explanationModal: {
        title: 'Permission required',
        doNotAskAgain: 'Do not ask again',
      },
      infoModal: {
        title: 'Permission blocked',
        text: 'To use this feature you need to manually grant access to "{{permission}}" in the settings on your device.',
        goToSettings: 'Go to Settings',
      },
      CAMERA: {
        settingsName: 'Camera',
        reason:
          'To be able to take pictures for upload, please accept the following permission request',
      },
      READ_CONTACTS: {
        settingsName: 'Contacts',
        reason: 'Grant access to your contacts to select recipients for Airtime or Data transfers',
      },
      READ_MEDIA_IMAGES: {
        settingsName: 'Photos and videos',
        reason:
          'To download receipts or upload images from your gallery, please accept the following permission request',
      },
      WRITE_EXTERNAL_STORAGE: {
        settingsName: 'Storage',
        reason:
          'To download receipts or upload images from your gallery, please accept the following permission request',
      },
    },
  
    quickTransactions: {
      header: {
        title: 'Choose a Service',
        text: 'Select a quick transaction to carry out',
      },
      quickBalance: {
        title: 'Quick Balance',
        text: 'Click to see your account balance',
      },
      quickAirtime: {
        title: 'Quick Airtime',
        text: 'Perform airtime top-up swiftly',
      },
      quickData: {
        title: 'Quick Data',
        text: 'Perform data top-up swiftly',
      },
      quickTransfer: {
        title: 'Quick Transfer',
        text: 'Send money to any account instantly',
      },
      quickBillsPayment: {
        title: 'Quick Bills Payment',
        text: 'Pay for all your bills on the go',
      },
      quickAccountBalance: 'Quick Account Balance',
    },
    myAccounts: {
      text: 'These are your active accounts. Select one or more accounts you want to display on the dashboard. The accounts not selected will not be visible in dashboard and during transactions.',
      title: 'My Accounts',
      successTitle: 'Account Selection Successful',
      successText: 'Your changed to current account was\ncompleted',
      buttonText: 'Select Accounts',
    },
    selfService: {
      title: 'Self Service',
      text: 'Manage your account',
      subtext: 'Select your preferred category to continue',
      options: {
        bvn: {
          title: 'BVN',
          modal: 'BVN View',
        },
        statements: {
          title: 'Statements',
          text: 'Send statements to an email, or self',
        },
        device: {
          title: 'Device Management',
          text: 'Manage linked devices',
        },
        limit: {
          title: 'Limit Management',
          text: 'Manage daily transfer, airtime and other limits',
        },
        beneficiary: {
          title: 'Beneficiary Management',
          text: 'Manage your favourite recipients',
        },
        contact: {
          title: 'Contact Us',
          text: 'Get in touch via email, chat or call',
        },
        locations: {
          title: 'Bank Locations',
          text: 'Get in touch with our branches, agents',
        },
        faq: {
          title: 'Frequent Questions',
          text: 'Find answers to commonly asked questions',
        },
        terms: {
          title: 'Terms and Conditions',
          text: 'View service information',
        },
      },
    },
    transactionReceipt: {
      title: 'Transaction Receipt',
      amount: 'Amount',
      sender: 'Sender',
      to: 'To',
      bankName: 'Bank Name',
      bankAccount: 'Bank Account',
      transactionType: 'Transaction type',
      date: 'Date',
      reference: 'Reference',
      description: 'Description',
      download: 'Download Receipt',
      share: 'Share Receipt',
      airtime: 'Airtime Purchase',
      data: 'Data Purchase',
      bills: '{{category}} Purchase',
      transfer: 'Transfer',
      sourceAccount: 'Source Account',
      biller: 'Biller',
      customerId: 'Customer ID',
    },
    statements: {
      title: 'Statements',
      startDateLabel: 'Start Date',
      startDatePlaceholder: 'Select start Date',
      endDateLabel: 'End Date',
      endDatePlaceholder: 'Select end Date',
      emailLabel: 'Email Address',
      emailPlaceholder: 'Enter email address',
      pdf: 'PDF',
      csv: 'CSV',
      successTitle: 'Request has been submitted',
      successText: 'Your request has been submitted',
    },
    deviceManagement: {
      title: 'Device Management',
      text: 'This is a list of your account-linked devices. You can remove them for added security. Logging in with a new or removed device requires OTP authentication.',
      linkDevice: {
        title: 'Link this Device',
        text: 'You have not linked any device to your account.',
      },
      button: 'Link Device',
      alert: {
        title: 'Unlink Device',
        text: 'This action will unlink selected device. Saved username, password and other settings from this device will be cleared. Do you want to proceed?',
        yes: 'Yes, proceed',
        no: 'No, cancel',
      },
      linkedSuccessText: 'You have linked this device successfully',
      linkedSuccessTitle: 'Device Linked',
      unlinkedSuccessTitle: 'Device Unlinked',
      unlinkedSuccessText: 'You have unlinked device successfully',
      tooManyLinked: 'Too many linked devices. Max allowed is {{maxDeviceCountAllowed}}',
    },
    limitManagement: {
      title: 'Limit Management',
      daily: 'Daily Transaction Limit',
      single: 'Single Transaction Limit',
      sameBank: 'Thrive to Thrive Transfer',
      otherBank: 'Thrive to Other Bank Transfer',
      airtime: 'Airtime',
      data: 'Data',
      bills: 'Bills Payment',
      editLimit: 'Edit Limit',
      indemnity: 'Indemnity for Changing Transaction Limits',
      agreementText: 'I agree to this Indemnity',
      successText: 'You have changed your limit successfully',
    },
    contactUs: {
      title: 'Contact Us',
      call: 'Call Us',
      email: 'Email Us',
      fb: 'Follow on Facebook',
      ig: 'Follow on Instagram',
      twitter: 'Follow on Twitter',
    },
    biometricsPrompt: 'Use {{biometryType}}',
    accountBalanceCard: {
      copyAccountDetails:
        'Bank: {{bank}}\nAccount number:{{accountNumber}}\nAccount name:{{accountName}}',
      accountType: '{{type}} account ',
      sourceAccount: 'Source Account',
      destinationAccount: 'Destination Account',
    },
    bankLocations: {
      searchPlaceholder: 'Search Locations',
      searchResultHeader: '{{count}} Location results found',
      locations: {
        name1: 'Headquaters',
      },
    },
    openBanking: {
      title: 'Open Banking',
      doMoreTitle: 'Do more with open banking',
      doMoreText: 'Select your preferred category to continue',
      myAccountsTitle: 'My accounts',
      myAccountsText: 'All your accounts added to open banking',
      myAccountsEmptyTitle: 'You have no account added',
      myAccountsEmptyText: 'Tap accounts to add your account(s)',
      addAccounts: {
        one: 'Tap',
        two: ' accounts ',
        three: ' to add your account(s)',
      },
      consentTitle: 'Consent for Open Banking',
      consentAgreementText: 'I consent to open banking',
      consent: {
        title: 'Consent for Open Banking',
        agreementToOpenBanking: 'I consent to open banking',
        agreement: 'I consent',
        revoke: 'Consent can be revoked anytime from the settings menu',
        openAccount: `{{name}} is requesting the following information to create an account. These information will be collected from Thrive Microfinance bank
        • Full Name
        • Date of Birth (DOB)
        • Bank Verification Number (BVN)
        • Address
        • Email 
        • Gender
          `,
        getAccount: {
          title: 'Consent to get your {{name}} accounts',
          text: 'Thrive Microfinance bank is requesting access to get your bank accounts from {{name}}.',
        },
        getAccountBalance: {
          title: 'Consent to get your {{name}} account balance',
          text: 'Thrive Microfinance bank is requesting access to get your bank account balance from {{name}}.',
        },
      },
      searchBankPlaceholder: 'Search for bank',
      accountBalanceCard: {
        header: 'Open Banking Balance',
        total: 'Total accounts connected - ',
      },
      accounts: {
        title: 'Accounts',
        text: 'Select preferred category to continue',
        open: {
          title: 'Open Account',
          text: 'Open a bank account of your preferred bank',
          customerInfo: 'Customer Information',
          customerInfoText: 'Review the Information below',
          successText: 'Account opened successfully and details sent to your email',
        },
        unblock: {
          title: 'Unblock Account',
          text: 'Unblock your bank account(s)',
          screenText: 'Select account(s) to unblock',
          successText: 'Your {{bank}} account has been unblocked',
        },
        view: {
          title: 'View Account(s)',
          text: 'View any of your created bank accounts',
          buttonText: 'Add to dashboard',
          screenText: 'Select account(s) to add to open banking',
          successText: 'Your {{bank}} accounts have been added to open banking',
        },
        viewBalance: {
          title: 'View Account Balance',
          text: 'View your account balance of preferred bank',
          screenText: 'View account balance',
        },
        block: {
          title: 'Block Account',
          text: 'Block your bank account(s)',
          screenText: 'Select account(s) to block',
          successText: 'Your {{bank}} account has been blocked',
        },
      },
      customer: {
        title: 'Customer',
      },
      transactions: {
        title: 'Transactions',
      },
      directDebit: {
        title: 'Direct Debit',
      },
      kyc: {
        title: 'KYC',
      },
      report: {
        title: 'Report a Fraud',
      },
    },
  };
  