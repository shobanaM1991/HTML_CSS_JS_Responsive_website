import subprocess
import os
import sys
import logging

def fb_generator():
    cwd = os.getcwd()
    fb_target = os.path.join('generated', 'pythonobjects')

    fb_source = cwd
    fb_file = 'schma.fbs'
    fb_root = os.path.join(cwd, fb_file)
    print(fb_root)

    logging.basicConfig(level=logging.INFO)
    logging.info('This will get logged')

    subprocess.call(['flatc.exe', '-p', '-o', fb_target, '-I', fb_root, 'schma.fbs'])

if __name__ == '__main__':
    fb_generator()