# -*- coding: utf-8 -*- 
import os
import sys
import string 
import time
import json
from xml.dom.minidom import parse
import xml.dom.minidom
import shutil

## ���ݵ�ǰʱ�����ȡ�汾��
def getVersionByTime():
	return time.strftime('%Y%m%d%H%M%S', time.localtime(time.time()))
	
## �޸��ļ�����
def modifyFile(mFile, mKey, mContent):
	with open("./" + mFile, "r") as f:
		lines = f.readlines() 
	# ��ʼ�滻	
	with open("./" + mFile, "w") as f_w:
		for line in lines:
			if mKey in line:
				line = mContent
			f_w.write(line)
	print "Modify File" + mFile + "==" + mKey
	
## �޸���Ŀ�����ļ�
def modifyEgretProperties():
	print "Modify egretProperties.json"
	## ��ȡ�ļ�
	with open("./egretProperties.json", "r") as f:
		lines = f.readlines()
	## ���ļ�����ת��һ���ַ���
	wholeStr = ""
	for i in lines:
		wholeStr += i
	## ���ַ���ת����json����
	jsonObj = json.loads(wholeStr)
	## ��ȡ�汾��
	curr_version = jsonObj["egret_version"]
	if curr_version != "4.0.1":
		print "��Ĺ��̰汾��Ϊ��" + curr_version + ",��ʹ��4.0.1"
	## ɾ��dragonbonesģ��
	modules = jsonObj["modules"]
	for j in range(len(modules)):
		if modules[j]["name"] == "dragonbones":
			del modules[j]
			break
	resultStr = json.dumps(jsonObj)
	## ���޸ĺ����������д���ļ�
	with open("./egretProperties.json", "w") as f_w:	
		f_w.write(resultStr);
	

## �޸�PlatformManager.ts�ļ�
def modifyPlatformManager(key):
	print "Modify PlatformManager.ts"
	## ��ȡ�ļ�
	with open("./src" + os.sep + "platform" + os.sep + "PlatformManager.ts", "r") as f:
		lines = f.readlines()
	# ��ʼ�޸ģ�����key�������߼�ע��	
	with open("./src" + os.sep + "platform" + os.sep + "PlatformManager.ts", "w") as f_w:
		for line in lines:
			if "//@@_" in line:
				if "//@@_" + key in line:
					continue
				elif "_start" in line:
					line = "/**"
				elif "_end" in line:
					line = "*/"
			f_w.write(line)
	
# �޸�PaymentManager.ts�ļ�
def modifyPaymentManager(key):
	print "Modify PaymentManager.ts"
	## ��ȡ�ļ�
	with open("./src" + os.sep + "platform" + os.sep + "PaymentManager.ts", "r") as f:
		lines = f.readlines()
	# ��ʼ�޸ģ�����key�������߼�ע��	
	with open("./src" + os.sep + "platform" + os.sep + "PaymentManager.ts", "w") as f_w:
		for line in lines:
			if "//@@_" in line:
				if "//@@_" + key in line:
					continue
				elif "_start" in line:
					line = "/**"
				elif "_end" in line:
					line = "*/"
			f_w.write(line)

## �޸�DragonBonesUtil �����������
def modifyDragonFile():
	print "Modify DragonBonesUtil.ts"
	## ��ȡ�ļ�
	with open("./src"+ os.sep +"game"+ os.sep +"util"+ os.sep + "DragonBonesUtil.ts", "r") as f:
		lines = f.readlines()
	# ��ʼ�޸ģ�ע��
	with open("./src"+ os.sep +"game"+ os.sep +"util"+ os.sep + "DragonBonesUtil.ts", "w") as f_w:
		for line in lines:
			if "//flag_dragon_start" in line:
				line = "/**"
			elif "//flag_dragon_end" in line:
				line = "*/"
			f_w.write(line)

## �޸ķ�����index �����޹�����
def modifyIndexPlatformFile(dir,key):
	print "Modify bin-release/web/"+ dir +"/index.html"
	## ��ȡ�ļ�
	with open("./bin-release" + os.sep + "web" + os.sep + dir + os.sep + "index.html", "r") as f:
		lines = f.readlines()
	# ��ʼ�޸ģ�����key�������߼�ע��	
	with open("./bin-release" + os.sep + "web" + os.sep + dir + os.sep + "index.html", "w") as f_w:
		for line in lines:
			if "//indexFlag_"+ key +"_start" in line:
				line = "/**"
			elif "//indexFlag_"+ key +"_end" in line:
				line = "*/"
			f_w.write(line)

## �޸�game_config.js �����������
def modifyGameConfigFile():
	print "Modify game_config.js"
	## ��ȡ�ļ�
	with open("./resource"+ os.sep +"script"+ os.sep + "game_config.js", "r") as f:
		lines = f.readlines()
	# ��ʼ�޸ģ�ע��
	with open("./resource"+ os.sep +"script"+ os.sep + "game_config.js", "w") as f_w:
		for line in lines:
			if "//flag_dragon_start" in line:
				line = "/**"
			elif "//flag_dragon_end" in line:
				line = "*/"
			f_w.write(line)

# �޸�index.html
def modifyIndexPage(key, pId):
	print "Modify index.html"
	## ��ȡ�ļ�
	with open("./bin-release" + os.sep + "web" + os.sep + key + os.sep + "index.html", "r") as f:
		lines = f.readlines()
	# ��ʼ�޸ģ�����key�������߼�ע��	
	with open("./bin-release" + os.sep + "web" + os.sep + key + os.sep + "index.html", "w") as f_w:
		isDelete = "false"
		for line in lines:
			if "publish_Start" in line:
				isDelete = "true"
			elif "publish_End" in line:
				isDelete = "false"
				
			if isDelete == "true":
				line = ""
				
			if "var isDebug = " in line:
				line = "var isDebug = false;\n"
			if "\"platformId\":" in line:
				line = "\"platformId\":" + pId + "\n";
			f_w.write(line)
			
## ɾ��index.html��������������
def deleteOtherChannlOfIndex(dir, key):
	print "Modify index.html delete other needless code."
	## ��ȡ�ļ�
	with open("./bin-release" + os.sep + "web" + os.sep + dir + os.sep + "index.html", "r") as f:
		lines = f.readlines()
	# ��ʼ�޸ģ�����key�������߼�ע��	
	with open("./bin-release" + os.sep + "web" + os.sep + dir + os.sep + "index.html", "w") as f_w:
		isDelete = "false"
		for line in lines:
			if "<!--flag_" in line:
				if "<!--flag_" + key + "_start-->" in line:
					continue
				elif "<!--flag_" + key + "_end-->" in line:
					continue
				elif "_start-->" in line:
					isDelete = "true"
				elif "_end-->" in line:
					isDelete = "false"
			else:
				if isDelete == "true":
					line = ""
			f_w.write(line)

## �޸����������ļ�default.thm.json
def modifyThmJsonFile(key, fileName, prefix):
	print "Modify" + fileName
	## ��ȡ�ļ�
	with open("./bin-release" + os.sep + "web" + os.sep + key + os.sep + "resource" + os.sep + fileName, "r") as f:
		lines = f.readlines()
	# ��ʼ�޸ģ��滻Ŀ¼ǰ׺
	with open("./bin-release" + os.sep + "web" + os.sep + key + os.sep + "resource" + os.sep + fileName, "w") as f_w:
		for line in lines:
			if "\"resource/" in line:
				line = line.replace("\"resource/", "\"" + prefix + key + "/resource/")
			f_w.write(line)

def moveFileto(sourceDir,  targetDir):
	shutil.copyfile(sourceDir,  targetDir)

## �޸�T_Change��ɾ����������
def modifyTChangeFile(platformId):
	print "Modify T_Charge.ts , Reserve platform:"+ str(platformId)
	## ��ȡ�ļ�
	with open("./src" + os.sep + "game" + os.sep + "data" + os.sep + "T_Charge.ts", "r") as f:
		lines = f.readlines()
	## ��ʼ�޸�
	checkName = "platform:" + str(platformId) + ",},"
	with open("./src" + os.sep + "game" + os.sep + "data" + os.sep + "T_Charge.ts", "w") as f_w:
		for line in lines:
			if "{id:" in line and not(checkName in line) and ",type:3" in line:
				line = ""
			f_w.write(line)

## �ű�������
def run():
	## ��������
	DOMTree = xml.dom.minidom.parse("publishConfig.xml")
	collection = DOMTree.documentElement
	channels = collection.getElementsByTagName("channel")
	channel_dict = {}
	for channel in channels:
		id = channel.getAttribute("id")
		platformId = channel.getElementsByTagName('platformId')[0]
		p_name = channel.getElementsByTagName('name')[0]
		p_addr = channel.getElementsByTagName('LOGIN_ADDR')[0]
		p_desc = channel.getElementsByTagName('description')[0]
		p_reyun = channel.getElementsByTagName('reyunId')[0]
		## [platformId, ��������, ��¼��������ַ]
		paramList = [platformId.childNodes[0].data, p_name.childNodes[0].data, p_addr.childNodes[0].data, p_desc.childNodes[0].data, p_reyun.childNodes[0].data]
		channel_dict[id] = paramList
	
	print "-----�����б�-----"
	print "���     ��������"
	for cha in channel_dict.iterkeys(): 
		tempList = channel_dict[cha]
		print "  " + cha + "      " + tempList[3]
		
	## ����
	p_channel = ""
	p_channel = raw_input("������Ҫ������������");
	## ��ǰ��ѡ������� 
	selected_channel = channel_dict[p_channel]
	## ��ʼ�޸��ļ���config.ts
	modifyFile("src" + os.sep + "config.ts", "static DEBUG", "\tstatic DEBUG = false;\n")
	modifyFile("src" + os.sep + "config.ts", "static logAppID", "\tstatic logAppID = \""+ selected_channel[4] +"\";\n")
	modifyFile("src" + os.sep + "config.ts", "static LOGIN_ADDR", "\tstatic LOGIN_ADDR = \"" + selected_channel[2] + "\";\n")
	## modifyFile("src" + os.sep + "config.ts", "static PLATFORM_ID", "\tstatic PLATFORM_ID = " + selected_channel[0] + ";\n")
	if selected_channel[3] == "Combunet_web":
		modifyFile("src" + os.sep + "config.ts", "static IS_WEB", "\tstatic IS_WEB = true;\n")
	## ��������������
	modifyFile("src" + os.sep + "config.ts", "static isOpenMusic", "\tstatic isOpenMusic = true;\n")
	## ��ʼ�޸��ļ���PlatformManager.ts
	modifyPlatformManager(selected_channel[1])
	## ��ʼ�޸��ļ���PaymentManager.ts
	modifyPaymentManager(selected_channel[1])
	## ��ʼ�޸��ļ� T_Change.ts
	modifyTChangeFile(selected_channel[0])
	## ��ʼ�޸��ļ���egretProperties.json
	if selected_channel[3] != "Combunet_web":
		modifyEgretProperties()
		modifyDragonFile()
		modifyGameConfigFile()
		
	
	## �汾��
	p_version = ""
	p_version = raw_input("������汾��(Ĭ��Ϊʱ���)��");
	## ��������
	p_runtime = "html5"
	##��ѹ����
	p_password = "ranshao"
	
	if p_version == "":
		p_version = getVersionByTime()
	print "======================================================="
	os.system("egret info")
	print "======================================================="
	print "��ʼ����..."
	os.system("egret build")
	print "======================================================="
	print "��ʼ����..."
	os.system("egret publish --version " + p_version + " --runtime " + p_runtime + " --password " + p_password)
	
	## �޸�index.html����
	modifyIndexPage(p_version, selected_channel[0])
	deleteOtherChannlOfIndex(p_version, selected_channel[1])

	## ��web�汾 ���˳�ҳ����ʾ������
	if selected_channel[3] != "Combunet_web":
		deleteOtherChannlOfIndex(p_version, "webalert")
	if selected_channel[3] == "Freedom":
		print "move file ziyouIndex/index.html to web publish"
		os.remove("./bin-release" + os.sep + "web" + os.sep + p_version + os.sep + "index.html")
		moveFileto("./ziyouIndex" + os.sep + "index.html","./bin-release" + os.sep + "web" + os.sep + p_version + os.sep + "index.html");
	
	## ������index������޸�
	if selected_channel[3] == "YiWanTang":
		modifyIndexPlatformFile(p_version,"normal")
	else:
		modifyIndexPlatformFile(p_version,"yiwantang")

	## �޸����������ļ�default.thm.json
	# p_res_prefix = raw_input("������Ҫ��������ԴĿ¼��");
	# if p_res_prefix != "":
	if selected_channel[3] == "Combunet_web":
		modifyThmJsonFile(p_version, "default.thm.json", "http://res.s1.fishing.combunet.com/combunet/")
		modifyThmJsonFile(p_version, "login.thm.json", "http://res.s1.fishing.combunet.com/combunet/")
	if selected_channel[3] == "Combunet_h5":
		modifyThmJsonFile(p_version, "default.thm.json", "http://res.s1.fishing.combunet.com/combunet/")
		modifyThmJsonFile(p_version, "login.thm.json", "http://res.s1.fishing.combunet.com/combunet/")
	if selected_channel[3] == "YiWanTang":
		modifyThmJsonFile(p_version, "default.thm.json", "http://res.s1.fishing.combunet.com/yiwantang/")
		modifyThmJsonFile(p_version, "login.thm.json", "http://res.s1.fishing.combunet.com/yiwantang/")




## ===========================================================================================================================
## ******* �ű��Ӵ˿�ʼ���� ********	
## �ж��Ƿ���Ҫ����svn
isSVN = raw_input("�Ƿ����svn����?(y/n)��");
if isSVN == "y":
	print "ɾ�� egretProperties.json / config.ts / PaymentManager.ts / PlatformManager.ts / DragonBonesUtil.ts ..."
	os.remove("egretProperties.json")
	os.remove("./src" + os.sep + "config.ts")
	os.remove("./src" + os.sep + "platform" + os.sep + "PaymentManager.ts")
	os.remove("./src" + os.sep + "platform" + os.sep + "PlatformManager.ts")
	os.remove("./src" + os.sep + "game" + os.sep + "util" + os.sep + "DragonBonesUtil.ts")
	os.remove("./src" + os.sep + "game" + os.sep + "data" + os.sep + "T_Charge.ts")
	os.remove("./resource" + os.sep + "script" + os.sep + "game_config.js")
	print "======================================================="
	## ������Ŀ�ļ�
	print "SVN������Ŀ�ļ�..."
	os.system("svn update")
	
## ��ʼ����
run()
print "Publish is over."
## ����������ָ�����
##print "Reset project config."

# OVER
os.system('pause')