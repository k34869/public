if [ "$(which git)" = "" ];then
	pkg install git && git clone https://gitee.com/k34869/LinuxShell.git
fi
mv ./LinuxShell/bin/bve $PREFIX/bin && chmod 777 $PREFIX/bin/bve
bve -r && bve
