from unicodedata import normalize
from urllib.parse import unquote_plus
from re import compile
from contextlib import suppress
import os
 
Url_Path = compile(r'\%[0-9A-E]{2}')    # URL 乱码的正则表达式，形如 %E9
 
Codes = 'utf8', 'gbk', 'big5'           # 常见编码清单
 
 
def decode(data: bytes)->str:
    '''对二进制数据按指定的编码进行尝试解码后返回字符串，
    解码失败，则触发 UnicodeDecodeError 异常'''
    for code in Codes:
        with suppress(UnicodeDecodeError):
            return data.decode(code)     # 成功解码返回字符串
    raise UnicodeDecodeError             # 失败触发异常
 
 
def repare_name(name: str)->str:
    '''修改文件名乱码,
    返回正常的字符串'''
    result = ''
    try:
        result = name.encode('gbk').decode('utf8')
    except UnicodeDecodeError:
        print('Error: 没有找到文件或读取文件失败')
    return result
   
 
 
if __name__ == '__main__':
    from pathlib import Path
    for path in Path('.').glob('*.*'):
        print(path)
        try:
            os.rename(path,repare_name(path.name))
        except FileNotFoundError:
            print('Error: 没有找到文件或读取文件失败')
        print(repare_name(path.name))
