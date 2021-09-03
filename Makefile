build: clean
	hugo

clean:
	rm -rf public/
	rm -rf resources/

serve:
	hugo server
