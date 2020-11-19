deps: ## Installs requirements
	npm i

run_packager: ## Starts packager
	npm start --reset-cache

log: ## Logs adb logs to console
	react-native log-android

run_app: ## Installs apk on connected device
	react-native run-android

create_apk: ## Creates apk
	npx jetify
	cd android && ./gradlew bundleRelease
