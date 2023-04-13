react native build types :

debug - testing, debugging, initial stages
release - uploading to play store / app store

official build process :
https://reactnative.dev/docs/signed-apk-android

command to generate hash :
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

path to run keytool :
C:\Program Files\Java\jdk-18.0.1.1\bin

credentials key pair :
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=samplepass
MYAPP_UPLOAD_KEY_PASSWORD=samplepass

path to generate builds :
cd android

command to get .aab file (to upload to play store)
./gradlew bundleRelease

path where .aab file will be :
D:\NativeApp\android\app\build\outputs\bundle\release

command to get .apk file (to run directly in our phones)
./gradlew assembleRelease

path where .apk file will be :
D:\NativeApp\android\app\build\outputs\apk\release

steps to generate build :

1. open cmd as admin in specified path
2. file my-upload-key.keystore will be generated in same folder
3. copy that file into android/app dir
4. paste the credentials pair in android/gradle.properties
5. paste the signing configs in android/app/build.gradle below default
6. paste signingConfigs.release in release object of buildTypes
7. run the build commands

DAY 6-7 notes :

to install root navigation lib:
yarn add @react-navigation/native

to install lib to handle screen view area with navigation:
yarn add react-native-screens react-native-safe-area-context

to install stack nav lib:
yarn add @react-navigation/native-stack

to install bottom tab nav lib:
yarn add @react-navigation/bottom-tabs

DAY 13 :

useMemo => keeping only value check

<!-- object, boolean, string, numbers -->

useCallback => keeping only function check

<!-- () => {.... value ...} -->

DAY 16 :

Website to download libraries :
https://www.npmjs.com

JEST :
expect()
toBe()
toHaveBeenCalled()
toEqual()

redux flow :
make api call from screen using dispatch
reducer is watching that api
reducer will make changes to data based on api resp
reducer will keep the api resp in store
screen will access updated data from store using selector
