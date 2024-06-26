package local.practice;

import local.practice.Combination;
import java.io.*;

public class BruteForce {
    public static void main(String[] args) throws IOException {
        String[] charSet = {
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        };
        Combination combination = new Combination(charSet);
        String[][] charComb = combination.compute(4);
        /*
        String fileUrl = "/storage/emulated/0/test/pastebin.txt";
        writeFile(fileUrl, charComb);
        */
        //printArray2d(charComb);
    }

    static void writeFile(String fileUrl, String[][] content) throws IOException {
        FileWriter fileWriter = new FileWriter(fileUrl);
        BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
        for (String[] line: content) {
            for (String string: line) {
                bufferedWriter.write(string);
            }
            bufferedWriter.newLine();
            //bufferedWriter.write(" ");
        }
        bufferedWriter.close();
    }

    static void printArray2d(String[][] array2d) {
        for (String[] array: array2d) {
            for (String s: array) {
                System.out.print(s);
            }
            System.out.println("");
        }
    }
}

class Combination {
    private String[] sample;

    private String[][] compute(String[] sample, int n) {
        int k = sample.length;
        String[][] sampleSpace = new String[(int) Math.pow(k, n)][n];
        for (int step = 1; step <= n; step++) {
            int kLength = (int)(Math.pow(k, n) / Math.pow(k, step));
            int currentIndex = 0;
            ArrayCycler sampleCycle = new ArrayCycler(sample);
            int sampleIndex = sampleCycle.getNextIndex();
            for (String[] s: sampleSpace) {
                s[step - 1] = sample[sampleIndex];
                if ((currentIndex + 1) % kLength == 0) sampleIndex = sampleCycle.getNextIndex();
                ++currentIndex;
            }
            System.out.printf("step: %d, kLength: %d\n", step, kLength);
        }
        return sampleSpace;
    }

    String[][] compute(int n) {
        return this.compute(this.sample, n);
    }

    Combination(String[] sample) {
        this.sample = sample;
    }
}

class ArrayCycler {
    private int nextIndex = 0;
    private int maxIndex;

    int getNextIndex() {
        int currentIndex = this.nextIndex;
        if (this.maxIndex == this.nextIndex + 1) {
            this.nextIndex = 0;
        } else ++this.nextIndex;
        return currentIndex;
    }

    ArrayCycler(String[] array) {
        this.maxIndex = array.length;
    }
}
